<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column content">
              <h1>Trust in you, be truly you.</h1>
              <p>
                พวกเราคือบริการที่ให้คำปรึกษาด้านอนาคตการทำงานของคุณที่ช่วยให้คุณสามารถพูดคุยปรึกษากับผู้เชี่ยวชาญในอาชีพนั้นๆ
                และค้นหาตัวตนที่เหมาะสมกับตัวคุณได้ผ่าน Video call
                โดยเข้าใช้งานได้อย่างเป็นส่วนตัวและปลอดภัย
              </p>
              <div class="mt-6 is-hidden-mobile"></div>
              <div class="has-text-centered">
                <b-button
                  type="is-primary"
                  outlined
                  tag="router-link"
                  to="/getting_started"
                  size="is-large"
                  >🚀 เริ่มค้นหาตัวเอง</b-button
                >
              </div>
            </div>
            <div class="column is-5">
              <img
                class="animate__animated animate__fadeInUp"
                src="@/assets/home00.svg"
                role="none"
                width="740.67538"
                height="473.94856"
                style="--animate-duration: 0.7s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container"></section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
section.hero {
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23bce6ff' fill-opacity='1' d='M0,288L30,277.3C60,267,120,245,180,234.7C240,224,300,224,360,229.3C420,235,480,245,540,256C600,267,660,277,720,234.7C780,192,840,96,900,74.7C960,53,1020,107,1080,117.3C1140,128,1200,96,1260,101.3C1320,107,1380,149,1410,170.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: 50% 50%;
}

blockquote.quote {
  background: none;
}
</style>
