import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./DashboardWebinar.css";
import { Input, Space, DatePicker, Button, Modal } from "antd";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@material-ui/core/Box";
import CancelIcon from "@mui/icons-material/Cancel";
// material
import { Typography } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import axios from "axios";
import config from "../../../../ApiConfig/Config";
import { useSelector } from "react-redux";
import moment from "moment";

const WEBINARLIST = [
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "completed",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
  {
    name: "Frozen yoghurt",
    department: " Ministry of External Affair",
    date: "Thu Sep 03 2020 08:21:14",
    host: "Ashley Jacobson",
    webinarLink: "https://google.com",
    status: "scheduled",
    usersLink: "https://google.com",
  },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DashboardWebinar = ({ isAdmin }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [agenda, setAgenda] = useState("");
  const [duration, setDuration] = useState("");
  const [departmentName, setdepartment] = useState("");
  const [meetingTopic, setMeetingTopic] = useState("");
  const [host, setHost] = useState("");
  const [date, setDate] = useState("");
  const { state } = useSelector((state) => state.vvgnli);
  const [loading, setLoading] = useState(false);
  const [futureWebinars, setFutureWebinars] = useState([]);
  const [webinarRegistredUsers, setWebinarRegistredUsers] = useState([]);
  const [isModalVisibleUser, setIsModalVisibleUser] = useState(false);

  var isAdmin = false;
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  console.log(userRoleFromSession.role);
  if (userRoleFromSession.role === 1) {
    isAdmin = true;
  } else if (userRoleFromSession.role === 2) {
    isAdmin = false;
  }
  console.log(isAdmin);

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancelUser = () => {
    setIsModalVisibleUser(false);
  };

  const handleDateChange = (date, datestring) => {
    console.log(date, datestring);
    setDate(datestring);
  };
  const handleCreateWebinar = async () => {
    setIsModalVisible(false);
    console.log(agenda, duration, departmentName, meetingTopic);

    const res = await axios.post(
      config.server.path + config.role.admin + config.api.createNewWebinar,
      {
        agenda: agenda,
        startTime: moment(date).format("yyyy-MM-DDThh:mm:ss[Z]"),
        adminUserId: userId,
        duration: duration,
        departmentName: departmentName,
        meetingTopic: meetingTopic,
        meetingType: 1,
        host: host,
      },
      {
        headers: { "User-Id": userId, state: state },
      }
    );
    await getWebinarDetails();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModalUsers = () => {
    setIsModalVisibleUser(true);
  };

  const getWebinarDetails = async () => {
    try {
      setLoading(true);
      const futureWebinar = await axios.get(
        config.server.path + config.role.admin + config.api.getFutureWebinars,
        {
          headers: { "User-Id": userId, state: state },
        }
      );
      setFutureWebinars(futureWebinar.data.webinars);
      setLoading(false);
      console.log(futureWebinar);
    } catch (error) {
      setLoading(false);
    }
  };

  const getRegisteredWebinarUsers = async (webinarId) => {
    const res = await axios.get(
      config.server.path +
        config.role.admin +
        config.api.getRegisteredUsers +
        `?webinarId=${webinarId}`,
      {
        headers: { "User-Id": userId, state: state },
      }
    );
    setWebinarRegistredUsers(res.data.registeredUsers);
    showModalUsers();
    console.log(res);
  };

  useEffect(() => {
    getWebinarDetails();
  }, []);

  return (
    <div className="dashboard__research">
      <div className="dashboard__research__container">
        <div className="dashboard__research__heading">
          <Typography variant="h3" gutterBottom component="div">
            Webinars Section
          </Typography>
          <div className="homepage__add__webinar__button">
            <Button type="primary" onClick={showModal}>
              Create A Webinar
            </Button>
          </div>
        </div>
        <div className="dashboard__research__table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Webinar Name</StyledTableCell>
                  <StyledTableCell>Media Id</StyledTableCell>
                  <StyledTableCell align="right">Department</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Host</StyledTableCell>
                  <StyledTableCell align="right">Start Link</StyledTableCell>
                  <StyledTableCell align="right">Webinar Link</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  {isAdmin && (
                    <StyledTableCell align="right">
                      Registers Users
                    </StyledTableCell>
                  )}
                  {isAdmin && (
                    <StyledTableCell align="right">Action</StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {futureWebinars &&
                  futureWebinars.map((row, id) => (
                    <StyledTableRow key={id}>
                      <StyledTableCell component="th" scope="row">
                        {row.topic}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.webinarId}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.department}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {moment(row.startTime).format(
                          "dddd DD MMMM yyyy hh:mm:ss A"
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.host}</StyledTableCell>
                      <StyledTableCell align="left">
                        <a href={row.startUrl}>Start Webinar Link</a>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <a href={row.joinUrl}>Webinar Link</a>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.status ? "Scheduled" : "Completed"}
                      </StyledTableCell>
                      {isAdmin && (
                        <StyledTableCell align="left">
                          <Button
                            onClick={() => {
                              getRegisteredWebinarUsers(row.webinarId);
                              console.log(row.webinarId);
                            }}
                          >
                            Users Link
                          </Button>
                        </StyledTableCell>
                      )}
                      {isAdmin && (
                        <StyledTableCell align="right">
                          <Box component="div" sx={{ display: "inline" }}>
                            <CancelIcon color="action" />
                          </Box>
                          <Box component="div" sx={{ display: "inline" }}>
                            <DoneIcon color="primary" />
                          </Box>
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="homepage__add__webinar__modal">
          <Modal
            title="Add New Webinar"
            visible={isModalVisible}
            onOk={handleCreateWebinar}
            onCancel={handleCancel}
            okText="Add Webinar"
          >
            <div>
              <Space>
                Agenda:{" "}
                <Input
                  placeholder="Enter Meeting Agenda"
                  onChange={(e) => setAgenda(e.target.value)}
                  value={agenda}
                />
              </Space>
              <br />
              <br />
              <Space>
                Date :
                <DatePicker showTime onChange={handleDateChange} />
              </Space>
              <br />
              <br />
              <Space>
                Duration:{" "}
                <Input
                  placeholder="Enter Meeting Duration "
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </Space>
              <br />
              <br />
              <Space>
                Host:{" "}
                <Input
                  placeholder="Enter Host Name"
                  value={host}
                  onChange={(e) => setHost(e.target.value)}
                />
              </Space>
              <br />
              <br />
              <Space>
                Department:{" "}
                <Input
                  placeholder="Enter Meeting Department"
                  value={departmentName}
                  onChange={(e) => setdepartment(e.target.value)}
                />
              </Space>
              <br />
              <br />
              <Space>
                Meeting Topic:{" "}
                <Input
                  placeholder="Enter Meeting Topic"
                  value={meetingTopic}
                  onChange={(e) => setMeetingTopic(e.target.value)}
                />
              </Space>
            </div>
          </Modal>
        </div>
        <div className="image__card__community__modal">
          <Modal
            visible={isModalVisibleUser}
            onOk={handleCancelUser}
            onCancel={handleCancelUser}
            style={{
              height: "90vh",
              position: "absolute",
              top: "5vh",
              left: "35%",
            }}
          >
            <div style={{ marginTop: "90%" }}>
              <div className="modal__images__comments">
                {webinarRegistredUsers &&
                  webinarRegistredUsers.map((comment) => (
                    <div
                      className="modal__images__comments__byUser"
                      key={comment.mediaId}
                    >
                      User Id : {comment.userId}
                      <br />
                      Email : {comment.email}
                      <br />
                    </div>
                  ))}
              </div>
            </div>
            {/* </div> */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DashboardWebinar;
