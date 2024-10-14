<template>
    <!-- Contact Section -->
    <section class="contact-section">
        <div class="container">
            <div class="row align-items-center">
                <!-- Contact Form -->
                <div class="col-md-6 mb-4">
                    <div class="contact-card">
                        <h2 class="text-center mb-4">Get in Touch</h2>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Your Name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Your Email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="5" placeholder="Your Message"
                                    required></textarea>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="col-md-6">
                    <div class="contact-info">
                        <h5>Contact Information</h5>
                        <p><i class="fas fa-map-marker-alt"></i> 1234 Street Name, City, State, Zip Code</p>
                        <p><i class="fas fa-phone-alt"></i> +1 (123) 456-7890</p>
                        <p><i class="fas fa-envelope"></i> info@example.com</p>
                        <p><i class="fas fa-clock"></i> Mon - Fri: 9:00 AM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>


<style scoped>
.contact-section {
    padding: 80px 0;
    /* Section padding */
    background-color: #f8f9fa;
    /* Light background color */
}

.contact-card {
    background-color: #fff;
    /* White background for form */
    border-radius: 15px;
    /* Rounded corners */
    padding: 30px;
    /* Padding inside the card */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    /* Subtle shadow */
    height: 100%;
    /* Full height */
}

.form-control,
.btn {
    border-radius: 30px;
    /* Rounded form elements */
}

.btn {
    background-color: #007bff;
    /* Primary color for button */
    color: #fff;
    /* White text */
    padding: 10px 20px;
    /* Button padding */
}

.btn:hover {
    background-color: #0056b3;
    /* Darker color on hover */
}

.contact-info {
    background-color: #007bff;
    /* Blue background for contact info */
    color: #fff;
    /* White text for contact info */
    border-radius: 15px;
    /* Rounded corners */
    padding: 30px;
    /* Padding for contact info */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    /* Subtle shadow */
    height: 100%;
    /* Make it full height */
    display: flex;
    /* Flexbox for vertical alignment */
    flex-direction: column;
    /* Column layout */
    justify-content: center;
    /* Center the content vertically */
}

.contact-info h5 {
    font-weight: bold;
    margin-bottom: 20px;
}

.contact-info p {
    margin: 10px 0;
    font-size: 16px;
}

.contact-info i {
    margin-right: 10px;
}

.row.equal {
    display: flex;
    /* Flexbox for equal height */
}

.row.equal>div {
    flex: 1;
    /* Equal width for both columns */
    display: flex;
    /* Flexbox for vertical alignment */
    justify-content: center;
    /* Center the content horizontally */
}
</style>