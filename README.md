# VMaware: A D&I Hub

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![GitHub issues open](https://img.shields.io/github/issues/j-alicia-long/SunShine.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/j-alicia-long/SunShine.svg?maxAge=2592000)]()

![App Dashboard](/client/public/dashboard.png?raw=true "VMAware Data Hub Dashboard")

## VMAware: A D&I Hub
We would like for VMware to be at the forefront of the movement in diversifying talent across the company's workforce. To propel VMware forward in promoting Diversity & Inclusion (D&I), we are building a web application that will leverage data visualization to analyze the diversity of backgrounds & perspectives across VMware employees.

**VMAware** is a new D&I hub where employees can view live data on the company's progress towards its D&I goals each quarter, and provide continuous feedback to VMware through sentiment analysis surveys. Users can also view D&I POD engagement statistics, including membership and event attendance.

Behind the scenes, we will provide recommendations for HR and team managers on how to diversify talent across teams in VMware. We hope to inform their decisions on creating outreach and recruitment programs for under-represented minorities, and facilitating employee relocation between different teams, business units, or office locations.


### Customer Challenge Category
**Measuring Cultural Impact**

[View Project Submission Here](https://submissions.eng.vmware.com/borathon-eda-intern-fy21q2/submissions/23652)
View deployed project at: https://vmaware.herokuapp.com/


## Authors

* **[Jason Au](https://github.com/jau8)** - *Full-stack development*
* **[Udisha Bhattacharyya](https://github.com/udishab)** - *Data analysis, database management*
* **[Saurav Ghosal](https://github.com/sauravghosal)** - *Full-stack development, Deployment*
* **[Jennifer Long](https://github.com/j-alicia-long)** - *Full-stack development, web scraping, UI/UX*
* **[Joshua Paredes](https://github.com/jparedes30)** - *Data analysis*


## Demo

| Dashboard | PODs |
| --- | --- |
| [![Dashboard page](/client/public/dashboard.png?raw=true)]() | [![PODs page](/client/public/pods.png?raw=true)]() |

| Survey Data | User Profile |
| --- | --- |
| [![Survey Data page ](/client/public/survey-data.png?raw=true)]() | [![User Profile page](/client/public/profile.png?raw=true)]() |


## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/j-alicia-long/SunShine.git`.
- Install server and client dependencies:
  ```
    cd SunShine
    npm install   # server dependencies
    cd client
    npm install   # client dependencies
  ```
- Run the project from the root directory: `npm run dev`


## Built With
This full-stack web application was primarily built with the MERN (MongoDB, Express, React, NodeJS) stack and deployed on Heroku.

* [ReactJS](https://reactjs.org/) - Frontend UI
* [NodeJS & Express JS](https://expressjs.com/) - Backend server
* [React-Bootstrap](https://react-bootstrap.github.io/), for UI components
  - [Light Bootstrap Dashboard React](https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/?ref=lbdr-readme), for base UI template
* [React-Polls](https://www.npmjs.com/package/react-polls/v/1.1.0) - For React polling component
* [PostgreSQL](https://www.postgresql.org/) - SQL Database
* [MongoDB](https://www.mongodb.com/) - NoSQL Database (User Auth)
* [AWS](https://aws.amazon.com/products/databases/) - Database Hosting
* [Heroku](https://heroku.com/) - Web app deployment

### Data Analysis Tools
* [Tableau](https://www.tableau.com/) - Data Visualizations
* [Natural Language ToolKit (NLTK)](https://www.nltk.org/) - NLP Sentiment Analysis
* [Stitch](https://www.stitchdata.com/) - Data pipelining
* [Selenium](https://www.selenium.dev/) - Web scraping for data


## Future Roadmap
* Publish application in the VMware Workspace ONE Intelligent Hub
* User authentication with Workspace ONE
* Pull live POD membership data from the [VMware Social API](https://social.vmware.com/api-docs)
* Integrate more with VMware social features as they are released


## Useful Links

Borathon info website: https://submissions.eng.vmware.com/borathon-eda-intern-fy21q2/pages/key-information

Project Submission: https://submissions.eng.vmware.com/borathon-eda-intern-fy21q2/submissions/23652

Google Drive planning folder: https://drive.google.com/drive/u/0/folders/1CUlmwjvJl4H7xTvWgDBrZL4aeIDKBj9q

Tableau Dashboards: https://public.tableau.com/profile/joshua.paredes#!/

Setting up a full-stack NodeJS application
- https://stackoverflow.com/questions/58070919/how-to-run-one-npm-start-for-two-different-folders-in-my-project-directory
