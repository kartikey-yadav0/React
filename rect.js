//React is javaScript liberary created by facebook.
//use to cereating UI.
//also used by Netflix and Instagram.
//Used to createv Single Page Appliction.
//WE can bulild mordern ,fast single Page Application or websites with React.
//React is a library, not a Framework.
//Angular is an example of a Framework.
//we can write Java Script much simpler by useing JQuery.
//A library in programming can be explained as a collection of codes. 
//the Virtual DOM improves performance by minimizing direct updates to the real DOM. 
// It efficiently tracks changes, updates only what's necessary, and ensures faster rendering. 
// This leads to smoother user experiences, easier debugging, and better state management, 
// all while abstracting browser inconsistencies.

//React's Core Syntax(JSX Syntex formet)
//example = const element =<h1>Hello!</h1>;
class Hello extends ReadableByteStreamController.component{
    render(){
        return<div>Hello{this.props.toWhat}</div>
    }
}

ReactDOM.render{
    <Hello toWhat="World"/>;
    document.getElementById('root')
};
