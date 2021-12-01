<template>
<div>
    <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
            <router-link class="sidebar-brand active" to="/dashboard">
                <span class="align-middle">AdminKit</span>
            </router-link>

            <ul class="sidebar-nav">
                <li class="sidebar-header">
                    Pages
                </li>
                <li class="sidebar-item">
                    <router-link class="sidebar-link " to="/dashboard">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link class="sidebar-link" to="/profile">
                        <i class="align-middle" data-feather="user"></i> <span class="align-middle">Profile</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link class="sidebar-link" to="/users">
                        <i class="align-middle" data-feather="users"></i> <span class="align-middle"> Users</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <router-link class="sidebar-link" to="/note">
                        <i class="align-middle" data-feather="edit"></i> <span class="align-middle">Self Note</span>
                    </router-link>
                </li>


                <li class="sidebar-header">
                    Front Page
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-buttons.html">
                        <i class="align-middle" data-feather="square"></i> <span class="align-middle">Buttons</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-forms.html">
                        <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Forms</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-cards.html">
                        <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Cards</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-typography.html">
                        <i class="align-middle" data-feather="align-left"></i> <span class="align-middle">Typography</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="icons-feather.html">
                        <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Icons</span>
                    </a>
                </li>

                <li class="sidebar-header">
                    Plugins & Addons
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="charts-chartjs.html">
                        <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Charts</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="maps-google.html">
                        <i class="align-middle" data-feather="map"></i> <span class="align-middle">Maps</span>
                    </a>
                </li>
            </ul>

            <div class="sidebar-cta">
                <div class="sidebar-cta-content">
                    <strong class="d-inline-block mb-2">Upgrade to Pro</strong>
                    <div class="mb-3 text-sm">
                        Are you looking for more components? Check out our premium version.
                    </div>
                    <div class="d-grid">
                        <a href="upgrade-to-pro.html" class="btn btn-primary">Upgrade to Pro</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "front"
}
</script>

<style scoped>
.active{
    background: linear-gradient(
        90deg,rgba(59,125,221,.1),rgba(59,125,221,.0875) 50%,transparent);
    border-left-color: #3b7ddd;
    color: #e9ecef;
}
</style>
