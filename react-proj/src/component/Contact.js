import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update'
// filter = 기존 배열 변경 x
// sort = 기존 배열을 변경

// splice : 원소 제거
// push :
// set : 원소 수정
export default class Contact extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedKey : -1,
      keyword : '',
      contactData : [
        {name:'Abet', phone : '010-0000-0001'},
        {name:'Betty', phone : '010-0000-0002'},
        {name:'Charlie', phone : '010-0000-0003'},
        {name:'David', phone : '010-0000-0004'}
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

 componentWillMount() {

   const contactData = localStorage.contactData;
   if(contactData) {
     this.setState({
       contactData : JSON.parse(contactData)
     })
   }
 }

 componentDidUpdate(prevProps, prevState) {
   if(JSON.stringify(prevProps) != JSON.stringify(prevState)) {
     localStorage.contactData = JSON.stringify(this.state.contactData);
   }
 }

  handleChange(e) {
    this.setState({
        keyword: e.target.value
    })
  }

  handleClick(key) {
    this.setState({
      selectedKey : key
    })
  }

  handleCreate(contact) {
    this.setState({
      contactData : update(this.state.contactData, { $push:[contact] })
    })
  }


  handleChange(e){
      let nextState= {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }
  handleRemove() {
    if(this.state.selectedKey < 0) {
      return ;
    }

    this.setState({
      contactData : update(this.state.contactData, { $splice:[[this.state.selectedKey, 1]] }),
      selectedKey : -1
    })
  }

  handleEdit (name, phone) {
    console.log(name)
      this.setState({
        contactData : update(this.state.contactData, {
            [this.state.selectedKey] : {
              name : { $set: name },
              phone : { $set: phone}
            }
        })
      })
  }

  render() {
    // 검색기능
    const mapToComponent = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
            .indexOf(this.state.keyword) > -1;
        }
      )
      return data.map((contact, i) => {
        return (<ContactInfo
                  contact={contact}
                  key={i}
                  onClick={() => this.handleClick(i)}
                />);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponent(this.state.contactData)}</div>
        <ContactDetails
            isSelected={this.state.selectedKey != -1}
            contact={this.state.contactData[this.state.selectedKey]}
            onRemove={this.handleRemove}
            onEdit={this.handleEdit}
        />
        <ContactCreate onCreate={this.handleCreate} />
      </div>
    )
  }
}
