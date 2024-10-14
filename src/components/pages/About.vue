<template>
    <!-- About Hero Section -->
    <section class="about-section">
        <div class="about-overlay"></div>
        <div class="container text-center position-relative">
            <h1 class="display-4 hero-text">About Us</h1>
            <p class="lead hero-text">Dedicated to providing the best service to our customers.</p>
            <p class="hero-text">Our mission is to ensure satisfaction and exceed expectations in everything we do.</p>
            <a href="#mission" class="btn btn-primary btn-lg">Learn More</a>
        </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="section-title">Our Mission</h2>
            <p>To provide exceptional products and services that empower our customers and foster a positive impact on
                the community. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus vitae veniam aspernatur ullam nihil, non earum, quam odit quod cupiditate suscipit eligendi molestiae itaque voluptas doloribus quisquam dolores. Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo vel aliquam, similique aliquid, consequuntur esse fuga doloribus dolores, eaque nostrum molestias voluptatibus recusandae dignissimos earum distinctio ratione laudantium laboriosam.</p>
        </div>
    </section>

    <!-- Values Section -->
    <section class="py-5">
        <div class="container text-center">
            <h2 class="section-title">Our Values</h2>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <h4>Integrity</h4>
                    <p>We adhere to the highest ethical standards in all our actions.</p>
                </div>
                <div class="col-md-4">
                    <h4>Innovation</h4>
                    <p>We strive for excellence and constantly seek new ways to improve.</p>
                </div>
                <div class="col-md-4">
                    <h4>Community</h4>
                    <p>We believe in giving back and supporting our local communities.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="py-5 bg-light">
        <div class="container text-center">
            <h2 class="section-title mb-4">Meet Our Team</h2>
            <div class="row justify-content-center">
                <div class="col-md-4 team-member">
                    <div class="card shadow border-0">
                        <img src="/image/team.jpeg" alt="Team Member"
                            class="card-img-top rounded-circle mx-auto mb-3" style="width: 150px; height: 150px;">
                        <div class="card-body">
                            <h5 class="card-title">John Doe</h5>
                            <p class="card-text">CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 team-member">
                    <div class="card shadow border-0">
                        <img src="/image/team.jpeg" alt="Team Member"
                            class="card-img-top rounded-circle mx-auto mb-3" style="width: 150px; height: 150px;">
                        <div class="card-body">
                            <h5 class="card-title">Jane Smith</h5>
                            <p class="card-text">CTO</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 team-member">
                    <div class="card shadow border-0">
                        <img src="/image/team.jpeg" alt="Team Member"
                            class="card-img-top rounded-circle mx-auto mb-3" style="width: 150px; height: 150px;">
                        <div class="card-body">
                            <h5 class="card-title">Sam Wilson</h5>
                            <p class="card-text">COO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-5">
        <div class="container text-center">
            <h2 class="section-title">Get in Touch</h2>
            <p>If you have any questions or would like to work with us, feel free to reach out!</p>
            <a href="mailto:info@example.com" class="btn btn-primary btn-lg">Contact Us</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>


<style>
.about-section {
    background-image: url('/image/about-banner.webp');
    background-size: cover;
    background-position: center;
    height: 60vh;
    display: flex;
    align-items: center;
    position: relative;
    color: #fff;
}

.about-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.container {
    position: relative;
    z-index: 2;
}

.section-title {
    margin: 60px 0 30px;
}


.team-member {
    transition: transform 0.3s;
}

.team-member:hover {
    transform: scale(1.05);
}

.card {
    background-color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    transition: box-shadow 0.3s;
}

.card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.hero-text {
    color: #ffffff;
    font-weight: bold;
}
</style>