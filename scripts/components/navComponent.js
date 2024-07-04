app.component('navcomponent', {
    template: ` <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="about.html">Personal Time</a></li>
        <li class="dropdown">Projects
            <div class="dropdown-content">
                <a href="PTW.html">Professional And Technical Writing</a>
                <a href="CS.html">Computer Science</a></div>
        </li>
    </ul>
</nav>`
})