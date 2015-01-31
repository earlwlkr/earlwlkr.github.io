var Student = React.createClass({displayName: "Student",
  render: function() {
    return (
      React.createElement("p", null, 
        "Họ tên: ", this.props.student.name, React.createElement("br", null), 
        "MSSV: ", this.props.student.studentId, React.createElement("br", null), 
        "Ngày sinh: ", this.props.student.birthday, React.createElement("br", null), 
        "Email: ", this.props.student.email, React.createElement("br", null), 
        "Điện thoại: ", this.props.student.phone, React.createElement("br", null)
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
}, 500);