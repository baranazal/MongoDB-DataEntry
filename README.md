# MongoDB DataEntry FrontEnd

<p align="center">
<a target="_blank"><img src = "https://github.com/baranazal/MongoDB-DataEntry/assets/72268356/fb83ccda-26d8-44a4-9e90-af4a9d9090ef" alt="logo"></a>
   </p>

A user-friendly data entry tool for submitting data effortlessly. Enter data, extract as images or Excel sheets. Efficient and convenient.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Clone the repository to your local machine:

```
git clone https://github.com/baranazal/MongoDB-DataEntry-FRONTEND.git
```

Or you can download it manually, make sure you put the frontend and the backend folders together in the same directory.


### Running the script.

1. First, you need to make an account at https://www.mongodb.com/.
2. Then, you should create a new project.
3. After that, you have to deploy your database "you can use ` M0 shared cluster ` its FREE and works perfect for small-medium projects".
4. Later on, after hit the Create Button You can continue setting up your database by creating the user 
5. Now, you database is ready you need to press connect on the cluster and choose Compass.
6. Finally, Copy the connection string at step 2 and replace it by the MONGO_URI in ` backend/config/config.env ` and hit save.

The username and the password is the ones you can find in step 4 
it should look like this : ` MONGO_URI=mongodb+srv://yourUserName:YourPWD@badataentry.wc7jst.mongodb.net/form `



Now you can start running the project.

So, Lets say you saved both frontend and backend files in Directory named DataEntry 

You should do the following in two terminals the first one ` cd DataEntry/frontend ` and ` cd DataEntry/backend ` in the second one
Then, you need to ` npm i ` in both terminals 
After that, you may run ` npm run start ` on both terminals.



## Usage

This what the Form may look like: 

<p align="center">
<a target="_blank"><img src = "https://github.com/baranazal/MongoDB-DataEntry/assets/72268356/4a7b0a74-1632-4816-843a-662083c10e80" alt="logo"></a>
   </p>

After Filling the form you can click on DataTable Tab to see all the submissions there.


### Explain the Table 

Every value you have submited has it's own column you can do some functions on the data such as :

1. ` Delete Selected ` Which will delete the selected incidents.
2. ` Edit Selected ` Which will edit the incident you selected " only one a time " .
3. ` Export Sheet ` Which will export the selected incidents as excel sheet " it could be one or more " .
4. ` Export Image ` Which will export the selected incidents as images  " it could be one or more " . <br />
     Note : you need to allow pop-ups to avoid facing errors on this function.
5. ` Export All Sheet ` Which will export the whole database as excel sheet.
6. ` Export All Image ` Which will export the whole database as images.


This what the DataTable may look like: 

<p align="center">
<a target="_blank"><img src = "https://github.com/baranazal/MongoDB-DataEntry/assets/72268356/b2da11b7-9b4a-426e-8d43-49ca311fd229" alt="logo"></a>
   </p>


## Contributing

If you would like to contribute to this project, please create a fork and submit a pull request with your changes.

