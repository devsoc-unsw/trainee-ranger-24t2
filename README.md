# Trek by trainee-ranger-24t2
Welcome to Trek, by Trainee Team Ranger (24T2)

## Purpose
- A comprehensive platform that allows users to input their start and end travel destinations and receive tailored trip itineraries. 
- It leverages AI to analyze user interests, past travel histories, and interactions on an integrated social network to provide personalized recommendations.

## Some background features and conceptualisations
- AI-Driven Recommendations: The AI analyzes user data and preferences to suggest destinations, activities, and local experiences that align with their interests.
- Social Media Integration: Users can connect with other travelers, share experiences, and gather ideas. User-generated content (photos, reviews) helps the AI learn and improve recommendations.
- Interactive Map Interface: An intuitive map-based interface where users can visualize their trip and modify their itinerary dynamically.

## Figma Screen Design + Prototype 
https://www.figma.com/design/48lidr4DcCEF5pjbsJV4dq/Trek?node-id=7-106&t=kWGDHGXwhCmxJFCy-0

- A finalised, interactive prototype may be in progress

## Opening + Running the Application
First step is to run
```
git clone https://github.com/devsoc-unsw/trainee-ranger-24t2.git
cd trainee-ranger-24t2
```
## Frontend
To open and setup the frontend, follow the steps in order (assuming that the first step above is completed)
```
cd frontend
npm i
```
To run the frontend in that file, run
```
npm start
```
## Backend
More possibly coming soon... \
To open and setup the backend, follow the steps in order (assuming that the repo has been cloned and the command is written in the correct folder)
```
cd backend
npm i
```
To run the backend in that file, first run
```
npx prisma generate
```
then afterwards,
```
npm start
```