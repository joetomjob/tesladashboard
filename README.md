# Vehicle Information System

## About
The application "Vehicle Information System" manages the vehicle information and communicate with the vehicle through different controls. The application was built usong Angular 6 framework. The application is best viewed inchrome browser. Some of the features provided by the application are: <br />
	> Identity - Shows information about the car nick name, VIN, vahicle databaseid and Environment. The data in the page are static. <br />
	> Configuration - Configuration is the features of the car like model, color, wheels, sunroofa and dual motor. The data is static. <br />
	> State of Charge - State of charge shows the charge remaining and the miles remaining for the car. The data in this part is dynamic. It changes with time based on the data available from the backend. <br />
	> Driver State - The driver state part in the screen shows the speed, acceleration and gear information. The data in this page is dynamic and changes based on the data available from backend. <br />
	> Body Controls - Body Controls - This part handles the Door, Windows, Sunroof and charge port. The user can open/close the windows, doors, sunroof and chargeport using the controls available in this part. <br />
	> HVAC - The ambient temperature, external temperature and fan speed are show in this module. Also the user has the provision to set the target temperature and change fan speed in this section. The temperature values and fanspeed changes based on the values from the backend. <br />
	> Firmware - The installed version of the software is shown in this section. If a new software version is installed, that installing version is also shown in this page along with the scrollbar. <br />

The application is responsive and will not break the layout in any device (tablets / phone etc). <br />

## Structure

> There were 7 components created for the 7 features mentioned above. <br />
> Separate models were created (7 of them) for each component. <br />
> Seven services were also created, one for each component. <br />
> Data is loaded for each component separately. Separate sevice call is made by each component. <br />
> The service gets data from the mock data files stored in the "mock-data" folder in the "assets" folder. <br />
> The home page just loads all the controls from the shared folder. <br />
> The layout used is css grid inside a css flex. <br />

## How to run
### Dependencies
 Two dependencies need to be installed before running the application. <br />
	1) NodeJS : Go to the following link : https://nodejs.org/en/download/current/ and download the version for corresponding operating system (Linux/Mac/Windows). Once downloaded, Click on the file. A new window will open and follow the instruction to install node js in the system. <br />
	2) Angular CLI : To install Angular CLI globally, open the terminal and run the command "sudo npm install -g @angular/cli". <br />

### Run the application
  1) Download the zipped file attached to the email to a local folder. <br />
	2) Unzip the downloaded file. <br />
	3) open the terminal and cd into the folder. <br />
	4) run the the command "npm install" to install all the packages. <br />
	5) After the packages are installed, run the command "ng serve -o --port=4200" to open the application in the browser. <br />
	6) The application will automatically ooen the browser. The link is : http://localhost:4200/ <br />
<br />
Thank you. <br />


# MyTeslaDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
