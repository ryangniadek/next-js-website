---
sidebar_position: 2
---

# Projects

## CS 2104 Assignment: Getting Started with Containers

In conjunction with [Professor Margaret Ellis](https://people.cs.vt.edu/maellis1/), I developed an assignment for CS 2104 (Problem Solving in CS) at Virginia Tech. The assignment is designed to introduce students to containers, the Docker command line, and deploying cloud services.

The assignment is composed of the following parts:

- Distinguishing between a container and a virtual machine
- Running a container image from a public registry
- Building a container image from a Dockerfile
- Pushing a container image to a GitLab registry
- Deploying a containerized application to the Azure cloud

Through this assignment, students gain reinforcement of the practical skills and problem solving heuristics they are supposed to learn in CS 2104. I am happy to provide the assignment instructions via [email](mailto:rgniadek@vt.edu).

## Research: CS Genome Project

I am involved with the [Computer Systems Genome Project](https://csgenome.org/) at Virginia Tech. CSG is the first scientific effort to catalog the lineage of computer system performance over time. My contributions to the team are API Development, DevOps, and Outreach.

## Hackathon: VibeCheck

**Winner: Qualcomm Best Networking Hack Award**

VibeCheck is a web app that takes a user's query and searches the web for relevant content. This content is categorized (into Public, News, and Financial) and sentiment analysis is performed on the content to provide the user with an analysis of what the internet thinks about their query - in each category. This web app was designed to help remind users that there are many different perspectives from which we can look at the world.

VibeCheck is a full stack application written in Python. The back end uses Flask and the front end uses Jinja. The app can be deployed in any environment using Docker.

Check out our [repository here](https://github.com/matt-davison/vibecheck). Created at the 2020 SheHacksVT Hackathon with Matt Davison, Ben Bernstein, and Nate Usher.

## Hackathon: SafeRyde

Safe Ryde is a private ride sharing service to streamline rides from friends because everyone wants a safe ride home. Safe Ryde has two user modes, Driver and Passenger. Passengers can request a ride and be added to the queue. Drivers can pick up the next passenger in line and receive information about the ride. They even have buttons to place a call to the passenger and let them know they've arrived and buttons to open the locations (pickup and drop-off) in Google Maps.

Front End: HTML, CSS (W3.CSS framework), JavaScript. Back End: Firebase Live Database, Google Cloud Platform. If we can add authentication, user groups, and make our database ACID compliant, the app would be deployable to a large audience.
