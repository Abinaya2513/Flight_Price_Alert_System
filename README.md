# Flight Price Alert System Using Real Time Intelligence

## Inspiration

It began with the thrill of planning a dream trip—only for ticket prices to shift by the time you’re ready to book. It’s like chasing a moving target, with prices changing every time you check. This sparked the idea for a solution that quietly tracks fares in the background, allowing travelers to relax and let the system do the work.

The project’s vision is to simplify travel planning, putting more focus on the journey itself rather than the price hunt. With this system, users receive timely alerts when a good deal appears, making it easier to catch spontaneous adventures and travel on a budget.

## Mission

This system continuously monitors flight ticket prices on users' chosen routes, tracking fluctuations to identify the best times to book. Instead of requiring travelers to manually check and recheck fares, it works quietly in the background, gathering data and analyzing patterns in ticket pricing. When a favorable fare appears—whether it's a drop below a certain threshold or a rare deal—users receive instant alerts, allowing them to act quickly and secure tickets at the best price.

The system saves both time and money by doing the tedious work of price tracking and letting users know exactly when to book. Designed to ease the travel planning process, it allows users to set preferences, like specific routes and budget limits, so they only get alerts for deals that match their needs. By making airfare more accessible and affordable, this system turns the often unpredictable process of booking flights into a reliable and hassle-free experience.

## Key Features

1. Real-Time Price Monitoring: Continuously tracks flight price changes across multiple sources, ensuring that users are alerted to price fluctuations as soon as they occur.

2. Scalable Data Processing: Utilizes Apache Kafka for efficient real-time data streaming, handling large volumes of flight price data from diverse sources without delay.

3. Automated Alerts: Leverages Microsoft Fabric’s real-time intelligence to detect significant price hikes or drops and triggers timely notifications to keep users informed of the best booking opportunities.

## Installation

Clone the repository.
Install dependencies using:

cd kafkafabric

npm install

**Setup & Requirements**

Install the latest version of node js

#Environmental Variables

Configure sensitive information such as:

**Kafka Configuration**

- KAFKA_BROKER='your-KAFKA_BROKER'
- KAFKA_CLIENT_ID='my-app'
KAFKA_SASL_MECHANISM='plain'
KAFKA_SASL_USERNAME='$ConnectionString'
KAFKA_SASL_PASSWORD='your-KAFKA_SASL_PASSWORD'
KAFKA_TOPIC='your-KAFKA_TOPIC'

**SQL Server Configuration**

SQL_SERVER_HOST='YourSqlserverName'
SQL_SERVER_USER='YourSqlUsername'
SQL_SERVER_PASSWORD='Yourpassword'
SQL_SERVER_DATABASE='DataBaseName'
SQL_SERVER_PORT=1433
SQL_TABLE_NAME="TableName"

**Running the Server**
node index.js

## License
This project is licensed under the MIT License. See the LICENSE file for details.
