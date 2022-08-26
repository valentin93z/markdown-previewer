import React from 'react';
import { marked } from 'marked';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: PLACEHOLDER,
      classEditor: "Editor",
      classEditorTextarea: "",
      classEditorFullScreenIcon: "toolbarIcon fullScreen",
      classEditorSmallScreenIcon: "toolbarIcon smallScreen hide",
      classPreviewer: "Previewer",
      classPreviewerFullScreenIcon: "toolbarIcon fullScreen",
      classPreviewerSmallScreenIcon: "toolbarIcon smallScreen hide"
    }
    this.editorChange = this.editorChange.bind(this);
    this.fullEditor = this.fullEditor.bind(this);
    this.fullPreviewer = this.fullPreviewer.bind(this);
  };

  editorChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  fullEditor() {
    switch (this.state.classPreviewer) {

      case "Previewer":
        this.setState({
          classPreviewer: "Previewer hide",
          classEditorTextarea: "full",
          classEditorFullScreenIcon: "toolbarIcon fullScreen hide",
          classEditorSmallScreenIcon: "toolbarIcon smallScreen",
        })
        break;

      case "Previewer hide":
        this.setState({
          classPreviewer: "Previewer",
          classEditorTextarea: "",
          classEditorFullScreenIcon: "toolbarIcon fullScreen",
          classEditorSmallScreenIcon: "toolbarIcon smallScreen hide",
        })
        break;

      default:
        alert("Error");
        break;
    }
  }

  fullPreviewer() {
    switch (this.state.classEditor) {

      case "Editor":
        this.setState({
          classEditor: "Editor hide",
          classPreviewerFullScreenIcon: "toolbarIcon fullScreen hide",
          classPreviewerSmallScreenIcon: "toolbarIcon smallScreen"
        })
        break;
      
      case "Editor hide":
        this.setState({
          classEditor: "Editor",
          classPreviewerFullScreenIcon: "toolbarIcon fullScreen",
          classPreviewerSmallScreenIcon: "toolbarIcon smallScreen hide"
        })
        break;

      default:
        alert("Error");
        break;
    }
  }

  render() {

    marked.setOptions({
      breaks: true
    });

    return (
      <div className='App'>

        <Editor 
          value={this.state.value}
          editorChange={this.editorChange}
          fullEditor={this.fullEditor}
          classEditor={this.state.classEditor}
          classEditorTextarea={this.state.classEditorTextarea}
          classEditorFullScreenIcon={this.state.classEditorFullScreenIcon}
          classEditorSmallScreenIcon={this.state.classEditorSmallScreenIcon} />

        <Previewer 
          value={this.state.value}
          fullPreviewer={this.fullPreviewer}
          classPreviewer={this.state.classPreviewer}
          classPreviewerFullScreenIcon={this.state.classPreviewerFullScreenIcon}
          classPreviewerSmallScreenIcon={this.state.classPreviewerSmallScreenIcon} />
      </div>
    )
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.classEditor}>
        <div className='toolbar'>
          <div className='leftToolbar'>
            <svg className='toolbarIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></svg>
            <span>Editor</span>
          </div>
          <div className='rightToolbar' onClick={this.props.fullEditor}>
            <svg className={this.props.classEditorFullScreenIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 6.797-2.891 13.28-7.938 17.84l-80 72C419.6 349.9 413.8 352 408 352c-3.312 0-6.625-.6875-9.766-2.078C389.6 346.1 384 337.5 384 328V288h-96v96l40-.0013c9.484 0 18.06 5.578 21.92 14.23s2.25 18.78-4.078 25.83l-72 80C269.3 509.1 262.8 512 255.1 512s-13.28-2.89-17.84-7.937l-71.1-80c-6.328-7.047-7.938-17.17-4.078-25.83s12.44-14.23 21.92-14.23l39.1 .0013V288H128v40c0 9.484-5.578 18.06-14.23 21.92C110.6 351.3 107.3 352 104 352c-5.812 0-11.56-2.109-16.06-6.156l-80-72C2.891 269.3 0 262.8 0 256s2.891-13.28 7.938-17.84l80-72C95 159.8 105.1 158.3 113.8 162.1C122.4 165.9 128 174.5 128 184V224h95.1V128l-39.1-.0013c-9.484 0-18.06-5.578-21.92-14.23S159.8 94.99 166.2 87.94l71.1-80c9.125-10.09 26.56-10.09 35.69 0l72 80c6.328 7.047 7.938 17.17 4.078 25.83s-12.44 14.23-21.92 14.23l-40 .0013V224H384V184c0-9.484 5.578-18.06 14.23-21.92c8.656-3.812 18.77-2.266 25.83 4.078l80 72C509.1 242.7 512 249.2 512 256z"/></svg>
            <svg className={this.props.classEditorSmallScreenIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"/></svg>
          </div>
        </div>
        <textarea className={this.props.classEditorTextarea} id="editor" value={this.props.value} onChange={this.props.editorChange} />
      </div>
    )
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.classPreviewer}>
        <div className='toolbar'>
          <div className='leftToolbar'>
            <svg className='toolbarIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z"/></svg>
            <span>Previewer</span>
          </div>
          <div className='rightToolbar' onClick={this.props.fullPreviewer}>
            <svg className={this.props.classPreviewerFullScreenIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256c0 6.797-2.891 13.28-7.938 17.84l-80 72C419.6 349.9 413.8 352 408 352c-3.312 0-6.625-.6875-9.766-2.078C389.6 346.1 384 337.5 384 328V288h-96v96l40-.0013c9.484 0 18.06 5.578 21.92 14.23s2.25 18.78-4.078 25.83l-72 80C269.3 509.1 262.8 512 255.1 512s-13.28-2.89-17.84-7.937l-71.1-80c-6.328-7.047-7.938-17.17-4.078-25.83s12.44-14.23 21.92-14.23l39.1 .0013V288H128v40c0 9.484-5.578 18.06-14.23 21.92C110.6 351.3 107.3 352 104 352c-5.812 0-11.56-2.109-16.06-6.156l-80-72C2.891 269.3 0 262.8 0 256s2.891-13.28 7.938-17.84l80-72C95 159.8 105.1 158.3 113.8 162.1C122.4 165.9 128 174.5 128 184V224h95.1V128l-39.1-.0013c-9.484 0-18.06-5.578-21.92-14.23S159.8 94.99 166.2 87.94l71.1-80c9.125-10.09 26.56-10.09 35.69 0l72 80c6.328 7.047 7.938 17.17 4.078 25.83s-12.44 14.23-21.92 14.23l-40 .0013V224H384V184c0-9.484 5.578-18.06 14.23-21.92c8.656-3.812 18.77-2.266 25.83 4.078l80 72C509.1 242.7 512 249.2 512 256z"/></svg>
            <svg className={this.props.classPreviewerSmallScreenIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"/></svg>
          </div>
        </div>
        <div className='PreviewerDisplay' id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.value)}} />
      </div>
    )
  }
}

const PLACEHOLDER = "# Hello, World! \n ## This is my React Markdown Previewer. \n ### Here you can edit this text: \n Some text with line code ` <div></div> ` inside. \n And some code in block: \n ``` \n <div class='header'> \n   <h1>Hello, World!</h1> \n </div> \n ``` \n You can make text **bold** or _italic_ or **_bold and italic_**. \n \n Also you can create ordered list: \n 1. first item of ordered list. \n 1. second item of ordered list. \n \n ...or unordered list: \n - first item of unordered list. \n   - child of first item. \n - second item of unordered list. \n   - child of second item. \n \n And if you want to do the same, visit: \n > [freecodecamp](https://www.freecodecamp.org) \n \n ![image](https://img.freepik.com/free-photo/turned-on-gray-laptop-computer_400718-47.jpg?t=st=1657290949~exp=1657291549~hmac=157bc702ff4a0692929770a8212577d08cc57ce0827192a49ca4d81ca9716e3f&w=1380)"

export default App;