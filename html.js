<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scholarship & Financial Aid Portal</title>
  <style>
    /* Global Styles */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f4f9ff;
      color: #222;
      padding: 20px;
    }

    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    /* Tabs */
    .tabs {
      text-align: center;
      margin-bottom: 20px;
    }
    .tabs button {
      background: #eaefff;
      border: none;
      padding: 10px 20px;
      margin: 5px;
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      transition: 0.3s;
    }
    .tabs button.active {
      background: #1a73e8;
      color: #fff;
    }

    /* Layout */
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }

    .card {
      background: #fff;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .card h2 {
      font-size: 16px;
      margin-bottom: 15px;
    }

    /* Table */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    th, td {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    th {
      background: #f9fbff;
    }
    td a {
      color: #1a73e8;
      text-decoration: none;
      font-weight: 500;
    }

    /* Status Updates */
    .status-box {
      background: #f4f9ff;
      padding: 10px;
      border-radius: 10px;
      margin-top: 10px;
      font-size: 14px;
    }

    /* Profile */
    .profile {
      text-align: center;
    }
    .profile img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    .profile h3 {
      margin-bottom: 15px;
      font-size: 18px;
    }
    .profile-info {
      text-align: left;
      font-size: 14px;
      line-height: 1.6;
    }
  </style>
</head>
<body>

  <h1>Student Scholarship & Financial Aid Tracking Platform</h1>

  <div class="tabs">
    <button class="active">Scholarship Applications</button>
    <button>Financial Aid Awards</button>
    <button>Status Updates</button>
    <button>User Profile</button>
  </div>

  <div class="container">
    <!-- Scholarship Applications -->
    <div class="card">
      <h2>Scholarship Applications</h2>
      <table>
        <tr>
          <th>Application ID</th>
          <th>Submission Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Scholarship Name</td>
          <td>195040</td>
          <td><a href="#">Status</a></td>
        </tr>
        <tr>
          <td>Scholarship Name</td>
          <td>27001</td>
          <td><a href="#">Status</a></td>
        </tr>
        <tr>
          <td>Scholarship Name</td>
          <td>3301</td>
          <td><a href="#">Status</a></td>
        </tr>
      </table>
    </div>

    <!-- Financial Aid Awards -->
    <div class="card">
      <h2>Financial Aid Awards</h2>
      <table>
        <tr>
          <th>Award Type</th>
          <th>Amount</th>
          <th>Disbursement Date</th>
        </tr>
        <tr>
          <td>Trial</td>
          <td>650</td>
          <td>14-03-2023</td>
        </tr>
        <tr>
          <td>Mini</td>
          <td>420</td>
          <td>12-04-2023</td>
        </tr>
        <tr>
          <td>Thit</td>
          <td>660</td>
          <td>12-10-2023</td>
        </tr>
      </table>
    </div>

    <!-- User Profile -->
    <div class="card profile">
      <img src="https://via.placeholder.com/80" alt="Profile Picture">
      <h3>Name</h3>
      <div class="profile-info">
        <p><b>Name:</b> Student ID</p>
        <p><b>Student ID:</b> 123456</p>
        <p><b>Department:</b> Computer Science</p>
        <p><b>Contact Email:</b> student@example.com</p>
      </div>
    </div>
  </div>

  <!-- Status Updates (below full width) -->
  <div class="card" style="margin-top:20px;">
    <h2>Status Updates</h2>
    <div class="status-box">
      Your application for <b>"Academic Excellence Scholarship"</b> has been approved.
    </div>
  </div>

</body>
</html>
