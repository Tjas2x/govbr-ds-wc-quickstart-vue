<script setup lang="ts">
import Breadcrumb from "./components/BreadCrumb.vue"
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"
import Menu from "./components/Menu.vue"
</script>

<template>
  <div className="template-base">
    <Header />
    <main class="d-flex flex-fill mb-5" id="main">
      <div class="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-lg-3">
            <Menu />
          </div>
          <div class="col mb-5">
            <Breadcrumb />
            <div class="main-content pl-sm-3 mt-4" id="main-content">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
