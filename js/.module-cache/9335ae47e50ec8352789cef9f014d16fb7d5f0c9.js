var Student = React.createClass({displayName: "Student",
  render: function() {
    return (
      React.createElement("div", null, React.createElement("h2", null, "Thông tin thành viên"), 
      React.createElement("table", null, 
        React.createElement("tbody", null, 
          React.createElement("tr", null, 
            React.createElement("td", null, "Họ tên:"), 
            React.createElement("td", null, this.props.student.name)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "MSSV"), 
            React.createElement("td", null, this.props.student.studentId)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Ngày sinh:"), 
            React.createElement("td", null, this.props.student.birthday)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Email:"), 
            React.createElement("td", null, this.props.student.email)
          ), 
          React.createElement("tr", null, 
            React.createElement("td", null, "Điện thoại:"), 
            React.createElement("td", null, this.props.student.phone)
          )
        )
      )
      )
    );
  }
});

var student = {
  name: 'Huỳnh Nguyễn Phúc Huỳnh',
  studentId: '1212156',
  birthday: '22/12/1994',
  email: 'mike358015@gmail.com',
  phone: '0128 360 6038'
};

setInterval(function() {
  React.render(
    React.createElement(Student, {student: student}),
    document.getElementById('info')
  );
}, 1000);