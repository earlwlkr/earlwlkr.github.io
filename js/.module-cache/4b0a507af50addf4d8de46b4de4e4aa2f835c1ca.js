var Group = React.createClass({displayName: "Group",
  render: function() {
    return (
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
    );
  }
});

var Student = React.createClass({displayName: "Student",
  render: function() {
    return (
      React.createElement("div", null, 
      React.createElement("button", {class: "back"}, "Back"), 
      React.createElement("h2", null, "Thông tin thành viên"), 
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
    React.createElement(Student, {info: students[studentID]}),
    document.getElementById('info')
  );
}
