var GroupInfo = React.createClass({displayName: "GroupInfo",
    render: function() {
      return (
        React.createElement(Group, {onClick: this.handleClick})
      )
    },
    handleClick: function(e) {
      console.log('Test');
      React.render(
        React.createElement(Group, null),
        document.getElementById('info')
      );
    }
});

var Group = React.createClass({displayName: "Group",
  render: function() {
    return (
      React.createElement("div", null, 
      React.createElement("img", {src: "images/group.jpeg", alt: "my friends", usemap: "#friendmap"}), 
      React.createElement("map", {name: "friendmap"}, 
          React.createElement("area", {shape: "circle", coords: "56, 124, 38", alt: "1212144", href: "#", onclick: "showStudentInfo(1212144)"}), 
          React.createElement("area", {shape: "circle", coords: "208, 120, 28", alt: "1212153", href: "#", onclick: "showStudentInfo(1212153)"}), 
          React.createElement("area", {shape: "circle", coords: "345, 129, 38", alt: "1212156", href: "#", onclick: "showStudentInfo(1212156)"})
      ), 

      React.createElement("h2", null, "Danh sách thành viên"), 
      React.createElement("table", null, 
        React.createElement("tbody", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, "Trần Như Huy"), 
            React.createElement("td", null, "1212144")
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Phạm Nhật Huy"), 
            React.createElement("td", null, "1212153")
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Huỳnh Nguyễn Phúc Huỳnh"), 
            React.createElement("td", null, "1212156")
          )
        )
      )
      )
    );
  }
});

var StudentInfo = React.createClass({displayName: "StudentInfo",
    render: function() {
      return (
        React.createElement(Student, {info: this.props.info, onClick: this.handleClick})
      )
    },
    handleClick: function(e) {
      React.render(
        React.createElement(Group, null),
        document.getElementById('info')
      );
    }
});

var Student = React.createClass({displayName: "Student",
  goBack: function() {
    console.log('Test');
    React.render(
      React.createElement(Group, null),
      document.getElementById('info')
    );
  },

  render: function() {
    return (
      React.createElement("div", null, 
      React.createElement("h2", null, React.createElement("button", {className: "btn btn-info back", onClick: this.props.onClick}, React.createElement("span", {className: "glyphicon glyphicon-arrow-left", "aria-hidden": "true"}), " Back"), " Thông tin thành viên"), 
      React.createElement("table", null, 
        React.createElement("tbody", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, "Họ tên:"), 
            React.createElement("td", null, this.props.info.name)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "MSSV"), 
            React.createElement("td", null, this.props.info.studentId)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Ngày sinh:"), 
            React.createElement("td", null, this.props.info.birthday)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Email:"), 
            React.createElement("td", null, this.props.info.email)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Điện thoại:"), 
            React.createElement("td", null, this.props.info.phone)
          )
        )
      )
      )
    );
  }
});


var students = {
  1212144: {
    name: 'Huỳnh Nguyễn Phúc Huỳnh',
    studentId: '1212144',
    birthday: '22/12/1994',
    email: 'mike358015@gmail.com',
    phone: '0128 360 6038'
  },
  1212153: {
    name: 'Huỳnh Nguyễn Phúc Huỳnh',
    studentId: '1212156',
    birthday: '22/12/1994',
    email: 'mike358015@gmail.com',
    phone: '0128 360 6038'
  },
  1212156: {
    name: 'Huỳnh Nguyễn Phúc Huỳnh',
    studentId: '1212156',
    birthday: '22/12/1994',
    email: 'mike358015@gmail.com',
    phone: '0128 360 6038'
  }
};

function showStudentInfo(studentID) {
  React.render(
    React.createElement(StudentInfo, {info: students[studentID]}),
    document.getElementById('info')
  );
}
