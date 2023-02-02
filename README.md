Simple Tasks App made with ReactNative.

I was creating reusable components, passing props to custom components, using Expo to run the react native app, styling react native components, layouts using react native. 
Main file App.js consists of stack and drawer navigators and styles as well. Stack Navigator provides a way for the app to transition between screens. Common pattern in navigation is to use drawer from left side for navigating between screens.

Tasks.js is the file where we add and delete task/s. Adding task in input is a must, otherwise we get an Alert which says "Please enter the task title". When we delete a task we use splice, which removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. Added scroll view to enable scrolling when list gets longer than the page. Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen.  I styled plus icon that on press we add the task to the task list.

AddTasks consists of an image, text(props) and a checkbox and styles as well. Value in Checkbox indicating if the checkbox should be rendered as checked or not. onValueChange - callback that is invoked when the user presses the checkbox. I use props as well. Props let you customise React components. For example, here I pass each "text" a different name to render. 

I used additional component such as Button.js, DrawerContent.js, Header.js, Title.js. I also have file - links.js which consists of 2 links (Privacy Policy for TasksApp and Terms and Conditions for TasksApp), I generated with www.freeprivacypolicy.com.



Dependencies:
   1. "@react-navigation/drawer"
   2. "@react-navigation/native"
   3. "@react-navigation/stack"
   4. "react-native-gesture-handler"
   5. "react-native-reanimated"
   6. "react-native-safe-area-context"
   7. "react-native-screens"
   8. "expo-checkbox"


<img width="982" alt="Screenshot 2023-02-02 at 16 06 49" src="https://user-images.githubusercontent.com/112869405/216361930-d5dbc137-1662-460f-b639-33b7313d54df.png">
