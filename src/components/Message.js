function Message(){
    return(
    <body onload="showData()">
        <div class="background1"></div>
        <div class="background2"></div>
        <div class="main">
            <table>
                <tr>
                    <td>Full Name</td>
                    <td>:</td>
                    <td id="showname"></td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>:</td>
                    <td id="showemail"></td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>:</td>
                    <td id="showphone"></td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td>:</td>
                    <td id="shownationality"></td>
                </tr>
            </table>

            <p id="desc">
                <i
                >Hi Anne, I’m Mike from Monsters, Inc. I’ve seen your previous project
                and it was really amazing. And as you know our company are planning to
                build new mobile application. I hope you can join us to develope this
                application. We look forward to hearing from you and hope you’ll join
                our project!</i
                >
            </p>
            <hr />

            <p>
                Thanks for contacting us! <br />
                We will be in touch with you shortly.
            </p>
            <a class="btn btn-warning" href="/" role="button" id="btn-home">Home</a>
            <img src="assets/img/img-dot@2x.png" id="dot" alt="" />
        </div>

            {/* <script>
            document.getElementById("showname").innerHTML=localStorage.getItem("fullnamevalue");
            document.getElementById("showemail").innerHTML=localStorage.getItem("emailvalue");
            document.getElementById("showphone").innerHTML=localStorage.getItem("phonevalue");
            document.getElementById("shownationality").innerHTML=localStorage.getItem("nationalityvalue");
            document.getElementById("desc").innerHTML=localStorage.getItem("messagevalue");
            </script> */}
    </body>
    );
}

export default Message;