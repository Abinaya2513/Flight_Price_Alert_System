require("dotenv").config(); // Load environment variables from .env
const { kafka, sqlConfig, connectToSqlServer } = require("./config.js");

// Produce a sample JSON message

async function sqlconnection() {
  try {
    const result = await connectToSqlServer();
    console.log("Fetched result in index:", result);
    return result;
  } catch (error) {
    console.error("Error while fetching tables:", error);
  }
}

// Producer configuration
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

// Function to run producer and consumer
const run = async () => {
  // Connect the producer
  await producer.connect();
  console.log("Kafka producer connected successfully");

  // Connect the consumer
  await consumer.connect();
  console.log("Kafka consumer connected successfully");

  // Subscribe to the topic
  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC,
    fromBeginning: true,
  });

  // Start the consumer to listen for messages
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
  // call the query
  const jsonMessage = await sqlconnection();
  console.log("log json", jsonMessage);

  await producer.send({
    topic: process.env.KAFKA_TOPIC,
    messages: [{ value: JSON.stringify(jsonMessage) }],
  });

  console.log("Message sent successfully");
};

// Handle any errors
run().catch((error) => {
  console.error("Error in Kafka producer/consumer:", error);
  producer.disconnect();
  consumer.disconnect();
});
