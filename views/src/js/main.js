var headerHtmlContent = ''
    + '     <div class="mdl-layout__header-row">'
    + '         <div class="mdl-layout-spacer"></div>'
    + '            <a href="#scroll-tab-1" class="mdl-layout__tab menu">Header</a>'
    +'<div class="new">'
    +'<a href=""><i class="fa fa-user-circle-o"></i></a>'
    +'</div>'
    // + '           <a href="#scroll-tab-1" class="mdl-layout__tab is-active">Home</a>'
    // + '             <a href="#scroll-tab-3" class="mdl-layout__tab">Templates</a>'
    // + '             <a href="#scroll-tab-4" class="mdl-layout__tab">Custom</a>'
    // +'             <a href="#scroll-tab-5" class="mdl-layout__tab">Tab 5</a>'
    // +'             <a href="#scroll-tab-6" class="mdl-layout__tab">Tab 6</a>'
    + '     </div>';

var sidebarHtmlContent = ''
    +'<div class="new">'
        +'<nav class="vmenu">'
        + '     <a href=""><img class="header-logo-height" src="./src/img/BETTERPLACE_Logo1.png"></a>'
        // + ' <span class="mdl-layout-title">Better Place</span>'
        + '  <div class="sidebar">'
        + '    <ul id="js-menu" class="menu">'
        + '        <li class="menu--item new">'
        + '            <a href="page1.html" class="sub_menu--link" id="logout-sidebar" title="Click here">'
        + '                <span class="menu--label">Dashboard</span>'
        + '            </a>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Org Profile</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Basic Profile</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Manage Functions and Roles</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Locations</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Site Groups</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Sites</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Document Names</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Org Connections</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Dashboard</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Manage</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Track Location</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Excel Upload</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">ManPower Supplied</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">ManPower Received</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Org Connections</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Dashboard</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Manage</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Track Location</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Excel Upload</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">ManPower Supplied</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">ManPower Received</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Attendance</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Log View/Reports</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Manage Area Supervisors</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Employees</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Availability Calendar</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Holidays</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Manage Devices</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Configuration</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Submitted Request</a>'
        + '                </li>'
         + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Approval Request</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Skills & Assessments</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Dashboard</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Training Results</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Manage Compliance</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Statute Summary</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Assign Statute</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Compliance</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Generate Compliance</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Form</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">SLA Settings</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Email Templates</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Reports</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">PF Validation</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">ESI Validation</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Work Order</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Vendor PF Details</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Vendor ESI Details</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Org Approvals</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Pending</a>'
        + '             </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Profile Share Request</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Create</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Open</a>'
        + '                </li>'
        + '                <!--<li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Approved</a>'
        + '                </li>-->'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Rejected</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">One Time</a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Org Verification</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Verification status</a>'
        + '             </li>'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Verification request</a>'
        + '             </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Verification Results</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Dashboard</a>'
        + '             </li>'
        + '              <li class="sub_menu--item">'
        + '                    <a href="page2.html" class="sub_menu--link" title="Click here to view list" id="">Create</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Open</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Green Case</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Orange Case</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Red Case</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Cancelled</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">All</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Status Rules</a>'
        + '                </li>'
        + '                <li class="sub_menu--item">'
        + '                    <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Expired/About to expire </a>'
        + '                </li>'
        + '            </ul>'
        + '        </li>'
        + '        <li class="menu--item new" id="">'
        + '            <a href="" class="sub_menu--link" title="">'
        + '                <i class="menu--icon"></i>'
        + '                <span class="menu--label">Ask More Request</span>'
        + '            </a>'
        + '        </li>'
        + '        <li class="menu--item new" id="">'
        + '            <a href="" class="sub_menu--link" title="">'
        + '                <i class="menu--icon"></i>'
        + '                <span class="menu--label">Upload and Download</span>'
        + '            </a>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Visit Manager</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Visitor Validate </a>'
        + '             </li>'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Present Visitors</a>'
        + '             </li>'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Recent Visitors</a>'
        + '             </li>'
        + '            </ul>'
        + '        </li>'
        + '      <li class="menu--item menu--item__has_sub_menu" id="">'
        + '          <label class="menu--link" title="">'
        + '              <i class="menu--icon"></i>'
        + '              <span class="menu--label">Aadhaar</span>'
        + '         </label>'
        + '         <ul class="sub_menu vnavmenu">'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">Authentication</a>'
        + '             </li>'
        + '             <li class="sub_menu--item">'
        + '                 <a href="page1.html" class="sub_menu--link" title="Click here to view list" id="">EKYC</a>'
        + '             </li>'
        + '            </ul>'
        + '        </li>'
        + '        <li class="menu--item new" id="">'
        + '            <a href="" class="sub_menu--link" title="">'
        + '                <i class="menu--icon"></i>'
        + '                <span class="menu--label">Action Group Configuration</span>'
        + '            </a>'
        + '        </li>'
        + '        <li class="menu--item new" id="">'
        + '            <a href="" class="sub_menu--link" title="">'
        + '                <i class="menu--icon"></i>'
        + '                <span class="menu--label">Notification</span>'
        + '            </a>'
        + '        </li>'
        + '        <li class="menu--item new" id="">'
        + '            <a href="" class="sub_menu--link" title="">'
        + '                <i class="menu--icon"></i>'
        + '                <span class="menu--label">Subscription</span>'
        + '            </a>'
        + '        </li>'
    +  ' </div>'
    + ' </nav>';



var headerId = document.getElementById("header_id");
headerId.innerHTML = headerHtmlContent;

var sidebarId = document.getElementById("sidebar_id");
sidebarId.innerHTML = sidebarHtmlContent;

