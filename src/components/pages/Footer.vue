<template>
    <!-- Footer Section -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus vel eros laoreet
                        laoreet.</p>
                </div>
                <div class="col-md-4 mb-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/game">Game</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h5>Contact Us</h5>
                    <p><i class="fas fa-map-marker-alt"></i> 1234 Street Name, City, State, Zip Code</p>
                    <p><i class="fas fa-phone-alt"></i> +1 (123) 456-7890</p>
                    <p><i class="fas fa-envelope"></i> info@example.com</p>
                    <div class="social-icons mt-3">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <hr class="my-4" style="border-color: rgba(255, 255, 255, 0.2);">
            <div class="text-center">
                <p class="mb-0">© 2024 best game. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>



<script>
export default {
    name : 'Footer',
}

</script>

<style scoped>
.footer {
    background-color: #343a40; /* Dark background color */
    color: #ffffff; /* White text */
    padding: 40px 0; /* Padding for the footer */
}
.footer a {
    color: #ffffff; /* White text for links */
    text-decoration: none; /* No underline */
}
.footer a:hover {
    text-decoration: underline; /* Underline on hover */
}
.footer h5 {
    font-weight: bold; /* Bold heading */
    margin-bottom: 20px; /* Space below heading */
}
.footer .social-icons a {
    margin-right: 15px; /* Space between icons */
    font-size: 24px; /* Icon size */
    color: #ffffff; /* White icons */
}
.footer .social-icons a:hover {
    color: #007bff; /* Change color on hover */
}
</style>