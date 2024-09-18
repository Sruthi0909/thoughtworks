import UserProfile from "./components/UserProfile";
import "./App.css";

const initialUserDetailsList = [
  {
    name: "Devon Lane",
    email: "devonlane@gmail.com",
    phoneNo: 9023678921,
    role: "Solutions Architect",
    uniqueNo: 1,
  },
  {
    name: "Jacob Jones",
    email: "jacobjones@gmail.com",
    phoneNo: 678263940,
    role: "Devops Engineer",
    uniqueNo: 2,
  },
  {
    name: "Floyd Miles",
    email: "floydmiles@gmail.com",
    phoneNO: 567890356,
    role: "Ml-Ops Engineer",
    uniqueNo: 3,
  },
  {
    name: "Esther Howard",
    email: "estherhoward@gmail.com",
    phoneNo: 789076543,
    role: "Software Developer",
    uniqueNo: 4,
  },
];

class App extends Component {
  state = {
    searchInput: "",
    usersDetailsList: initialUserDetailsList,
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteUser = (uniqueNo) => {
    const { usersDetailsList } = this.state;
    const filteredUsersData = usersDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({
      usersDetailsList: filteredUsersData,
    });
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
