var Group = React.createClass({
  render: function() {
    return (
      <div>
      <img src="images/group.jpeg" useMap="#friendmap" />
      <map name="friendmap">
          <area shape="circle" coords="56, 124, 38" id="1212144" href="javascript:showStudentInfo(1212144)" />
          <area shape="circle" coords="208, 120, 28" id="1212153" href="javascript:showStudentInfo(1212153)" />
          <area shape="circle" coords="345, 129, 38" id="1212156" href="javascript:showStudentInfo(1212156)" />
      </map>

      <h2>Danh sách thành viên</h2>
      <table>
        <tbody>
          <tr>
            <td>Trần Như Huy</td>
            <td>1212144</td>
          </tr>
          <tr>
            <td>Phạm Nhật Huy</td>
            <td>1212153</td>
          </tr>
          <tr>
            <td>Huỳnh Nguyễn Phúc Huỳnh</td>
            <td>1212156</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
});

var StudentInfo = React.createClass({
    render: function() {
      return (
        <Student info={this.props.info} click={this.handleClick} />
      )
    },
    handleClick: function(e) {
      console.log(e);
      React.render(
        <Group />,
        document.getElementById('info')
      );
    }
});

var Student = React.createClass({

  render: function() {
    var imgPath = "images/" + this.props.info.studentId + ".jpg";
    return (
      <div>
      <img src={imgPath} />
      <h2><button className="btn btn-info" onClick={this.props.click}><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Back</button> Thông tin thành viên</h2>
      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>{this.props.info.name}</td>
          </tr>
          <tr>
            <td>MSSV:</td>
            <td>{this.props.info.studentId}</td>
          </tr>
          <tr>
            <td>Ngày sinh:</td>
            <td>{this.props.info.birthday}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{this.props.info.email}</td>
          </tr>
          <tr>
            <td>Điện thoại:</td>
            <td>{this.props.info.phone}</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
});


var students = {
  1212144: {
    name: 'Hà Như Huy',
    studentId: '1212144',
    birthday: '12/05/1994',
    email: 'hnhuy234@gmail.com',
    phone: '096 324 3095'
  },
  1212153: {
    name: 'Phạm Nhật Huy',
    studentId: '1212153',
    birthday: '10/09/1994',
    email: 'pnhuy94@gmail.com',
    phone: '0165 946 0939'
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
    <StudentInfo info={students[studentID]} />,
    document.getElementById('info')
  );
}
