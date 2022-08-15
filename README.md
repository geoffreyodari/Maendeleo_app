# Maendeleo Tracker (Progress)
This is an application that is used to track the progress of items booked for repair as they are moved from one step to another until completion of the repair process. Its aim is to give customer satisfaction in the process of servicing their gadgets which they have taken back after purchase.
>The live site can be available on: https://maendeleo-app-frontend.herokuapp.com/
## Table of Contents
* [login](#login)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->
## General Information
Safaricom Sales devices mostly Phones, Tablets, Routers and Modems. Some percentage of the sold items malfunction and they need to be repaired. The process of receiving the phones from the customers(booking), sending to repair centers(courier) receiving and servicing at the various repair centers and sending back, receiving from repair centers, informing customers to collect the items.
This long process has the following gaps which this app seeks to address.
1.	Record keeping for the items is not unified across all users.
2.	There is no clear statistics of the repair cases.
3.	No tracking of the items.
4.	Customers can’t get real time progress report.
5.	Customers rely on human intervention to give feedback mostly which is not accurate and makes customers to make trips to the retail centers to enquired of the progress.
6.	The terminals team can’t get accurate reports of the phones booked, repaired, collected, not collected, swaps done.
7.	If an item gets lost between receiving and repair, it becomes hard to point out exactly at what point.
8.	Low NPS.

Solution:
We propose to build an app both web and mobile that can do the following:
The application has four levels of access:

## Benefits of this project 
1.	Keeps unified records across all users
2.	Easily accessible reports and records at any given time for business decisions.
3.	Easy to account for customer items received back.
4.	Easy to trace progress for an item at any given time.
5.	Keeps secure customer records
6.	Eliminates the use of ugly manual old school books.
7.	Customers will not waste time and fare(transport) to Safaricom to check on their phones.
8.	Eliminates manual and annoying way of notifying the customers.
9.	Resolves the issue of looking for repair centers to give feedback.
10. Once a phone has been booked more than three times, it gives a recommendation for swap.
11. Gives notification when an item is going past service level agreement(SLA).

## Technologies Used
- Html
- CSS
- BOOTSTRAP
- Javascript
- Nodejs
- React
- Express
- MongoDb
- Github
- Heroku


## Features

- Login
- Password 
- Booking
- Retrieving information
- Database connection
- Generation of Tracking ID
- Progress notification
- Multi-level access
- Item Search

## Screenshots
![image](https://user-images.githubusercontent.com/92366939/183600094-8b208c87-aace-4f21-9f77-a7e14a1f8ecb.png)
![image](https://user-images.githubusercontent.com/92366939/183602598-37e9d14a-aa63-4274-9031-e4be6b85bcd0.png)
![image](https://user-images.githubusercontent.com/92366939/183602843-18fe6933-fee9-4c8b-9f3d-e7a7324a2ea0.png)



## Setup
<li>runs on http://localhost:3000.
<li>You need to install the technologies said above to run the program on windows.
<p>Here are Postman Instructions<p>


![Postman](/postman.png)
![tag](/postman.PNG)

<li>view all requests:
curl --location --request GET 'http://localhost:5000/retail/requests/'

<p>view based on phone:
<p>GETview based on phone
<li>curl --location --request GET 'http://localhost:5000/retail/requests/phone/0722030300'

<li>PATH VARIABLES
<p>phone:  0722030300

<p>view based on imei
<p>GETview based on imei
<li>curl --location --request GET 'http://localhost:5000/retail/requests/imei/52176666333'

<li> PATH VARIABLES
<p>id:  52176666333


<p>view based on status
<p>GETview based on status
<li>curl --location --request GET 'http://localhost:5001/retail/requests/status/Pending'

<li> PATH VARIABLES
<p>status: Pending


<p>insert new request
<p>POSTinsert new request
<p>Example Request
<p>curl --location --request POST 'http://localhost:5000/retail/requests/' \
 --data-raw '{ 
    <p>"Name": "Joe Biden",
    <p>"phone": "0722000300",
    <p>"email": "biden@email.com",
    <p>"national_id": "66666777",
    <p>"model": "Huawei",
    <p>"imei": "52176666333",
    <p>"serial": "52176666333",
    <p>"receipt": "34567",
    <p>"warranty": true,
    <p> "physical_condition": "damaged"  
        
 }'


<p>update retail repair request
<p>PUTupdate retail repair request
<li> curl --location --request PUT 'http://localhost:5001/retail/issues/62f10de18da442cf3f39c88e' \
--data-raw '

    {"status":  { "state": "Closed", "comments": "comment" }}
'


<p>update waybill number
<p>PUTupdate waybill number
<li>curl --location --request PUT 'http://localhost:5001/retail/waybill/6262b27c4f7e7cd201f74181' \
--data-raw '{
    "waybill_to_repair": "1234567890",
    "waybill_to_retail": "1234567890" 
}'

## Usage
Just log in
![image](https://user-images.githubusercontent.com/92366939/183600094-8b208c87-aace-4f21-9f77-a7e14a1f8ecb.png)

## Project Status
This project is on its final stages.
## Room for Improvement
This project in its entiety can have up to 5-6 levels of access but in this initial phase, we have done only two levels of access namely:
<li> Retail View
<li> Repair Center view.<p>
  
In the future phase, there is room to develop the remaining levels to accommodate more accesses.</p>

To include:
   <li>Admin level
   <li>Call center level
   <li>Customer access
   <li>Other interested parties

## Acknowledgements
We give credit to:
<li>Our Technical Mentor Mr Gideon Maroko


## Contact
Created by:
<li> Geoffrey Odari
<li>Racheal Gathagu
<li>Enoch Maonga

