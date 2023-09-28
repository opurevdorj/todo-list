// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div id="title">MY TO DO LIST</div>
//       <div class="inputBox">
//         <input placeholder="Enter to do list" class="enterBox" />
//         <button id="saveButton">Save</button>
//       </div>
//       <div class="inputBox">
//         <input class="enterBox"/>
//         <button class="deleteButton">Delete</button>
//       </div>
//       <div class="inputBox">
//         <input class="enterBox"/>
//         <button class="deleteButton">Delete</button>
//       </div>
//       <div class="inputBox">
//         <input class="enterBox"/>
//         <button class="deleteButton">Delete</button>
//       </div>
//       <div class="inputBox">
//         <input class="enterBox"/>
//         <button class="deleteButton">Delete</button>
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
// import Counter from './Counter';
import ToDo from './ToDo';

    function App() {
        return (
// {/* custom component */}
            <div>
              {/* <Counter/> */}
              <ToDo/>
            </div>
        );
      }

export default App;