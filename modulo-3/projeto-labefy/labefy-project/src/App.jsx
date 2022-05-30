import React from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import PlaylistList from "./components/PlaylistList";




class App extends React.Component{

  state = {
    page: "create"
  }

  goToCreate = () =>{
    this.setState({page:"create"})  
  }

goToList = () =>{
  this.setState({page: "list"})
}

switchPage = () =>{
  switch(this.state.page){
    case "create":
      return <CreatePlaylist goToList={this.goToList}/>
      case "list":
        return <PlaylistList goToCreate={this.goToCreate}/>
        default:
          return <p>Nenhuma página foi selecionada. </p>
}
}
    render(){
    return(
      <div>
        {this.switchPage()}
      </div>
    )
  }
}


export default App;