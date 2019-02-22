**FriendFinder**
This app is a compatibility-based "FriendFinder" application -- basically a dating app. The site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The **server.js** file requires the basic npm packages **express** and **path**.

**Express** is used to handle routing. 

The survey has 10 questions. Each answer is based on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. Users must enter their name, a url for their picture, and answer all 10 questions.  If a question is not answered, the user will be alerted. If the picture is not a url (doesn't start with 'http'), the user will be alerted.

There is **"Home"** page which is the default page. If a user clicks on the **Go to survey** button,
the survey page will display. From the home page, the JSON of all the possible friends can also be displayed.

The user's most compatible friend is found as follows:

Compare the difference between user's scores against those from other users (in friendsData.js), question by question. Add up the differences to calculate the total difference.

The closest match will be the user with the least amount of difference.
Once the current user's most compatible friend is found it will be displayed as a modal pop-up.

The modal displays both the name and picture of the closest match.

Pictures were taken from images doing google search and come from many different websites.
Developed by Ilene Cohen.
email: ilene413@icloud.com