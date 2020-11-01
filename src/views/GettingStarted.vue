<template>
  <div class="container" style="margin: 0; max-width: 100%; padding: 0 5%">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body is-justify-content-center">
        <transition
          enter-active-class="animate__animated animate__fadeInRight"
          leave-active-class="animate__animated animate__fadeOutLeft"
          mode="out-in"
        >
          <div
            v-if="filter_step === 0"
            :key="0"
            class="box has-text-centered content"
            style="--animate-duration: 0.5s"
          >
            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <img
                  src="@/assets/q00.svg"
                  alt="We will ask you quick questions!"
                  width="844.67538"
                  height="595.26155"
                  style="width: 10vw"
                />
              </div>
              <div class="column">
                <h1>เดี๋ยวเรามาตรวจเช็คกันก่อน!</h1>
                <p>
                  ตอนนี้คุณพอจะมีความคิดอยู่ในหัวแล้วหรือยังว่าคุณอยากเป็นอะไร?
                </p>
              </div>
            </div>

            <div class="button-group is-flex">
              <div class="button mr-3" @click="filter_step += 2">
                <img
                  src="@/assets/q01.svg"
                  alt="ฉันพอจะรู้อยู่แล้ว"
                  role="none"
                  width="1094"
                  height="760"
                  style="max-width: 140px; max-height: 97.25px"
                />
                <h2>ฉันพอจะรู้อยู่แล้ว</h2>
              </div>
              <div class="button" @click="filter_step++">
                <img
                  src="@/assets/q02.svg"
                  alt="ฉันพอจะรู้อยู่แล้ว"
                  role="none"
                  width="1094"
                  height="760"
                  style="max-width: 140px; max-height: 97.25px"
                />
                <h2>ฉันยังไม่รู้เลย</h2>
              </div>
            </div>
            <hr class="my-3" />
            <div class="has-text-right">
              <router-link class="button is-small" to="/mentors">
                ข้ามขั้นตอนนี้ ฉันขอดูเมนเทอร์ทุกคน
              </router-link>
            </div>
          </div>
          <div
            v-if="filter_step === 1"
            :key="1"
            class="box has-text-centered content"
            style="--animate-duration: 0.5s"
          >
            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <img
                  src="@/assets/q02.svg"
                  alt="We will ask you quick questions!"
                  width="844.67538"
                  height="595.26155"
                  style="width: 10vw"
                />
              </div>
              <div class="column">
                <h1>ให้เราช่วยคุณนะ</h1>
                <p>
                  พบที่ปรึกษาทั่วไปของเราเพื่อช่วยแนะนำสายงานต่างๆ ให้กับคุณ<br />
                  หรือคุณสามารถเลือกความสนใจด้วยตัวคุณเองได้
                </p>
              </div>
            </div>

            <div class="button-group is-flex">
              <div class="button mr-3" @click="gotomentor()">
                <img
                  src="@/assets/q03.svg"
                  alt="ฉันพอจะรู้อยู่แล้ว"
                  role="none"
                  width="1094"
                  height="760"
                  style="max-width: 140px; max-height: 97.25px"
                />
                <h2>ฉันอยากพบที่ปรึกษา</h2>
              </div>
              <div class="button" @click="filter_step++">
                <img
                  src="@/assets/q04.svg"
                  alt="ฉันพอจะรู้อยู่แล้ว"
                  role="none"
                  width="1094"
                  height="760"
                  style="max-width: 140px; max-height: 97.25px"
                />
                <h2>ฉันขอเลือกความสนใจเอง</h2>
              </div>
            </div>
            <hr class="my-3" />
            <div class="has-text-right">
              <router-link class="button is-small" to="/mentors">
                ข้ามขั้นตอนนี้ ฉันขอดูเมนเทอร์ทุกคน
              </router-link>
            </div>
          </div>
          <div
            v-if="filter_step === 2"
            :key="2"
            class="box has-text-centered content"
            style="--animate-duration: 0.5s"
          >
            <div class="columns is-vcentered">
              <div class="column is-narrow">
                <img
                  src="@/assets/q04.svg"
                  alt="We will ask you quick questions!"
                  width="844.67538"
                  height="595.26155"
                  style="width: 10vw"
                />
              </div>
              <div class="column">
                <h1>คุณสนใจในอาชีพอะไรอยู่?</h1>
              </div>
            </div>
            <b-field>
              <b-input
                type="search"
                icon="search"
                v-model.trim="filter"
                placeholder="ค้นหา..."
              ></b-input>
            </b-field>
            <section class="job_btns">
              <b-button
                expanded
                v-for="(job, index) in filtered_job"
                :key="index"
                @click="gotomentor()"
                >{{ job }}</b-button
              >
            </section>
            <hr class="my-3" />
            <div class="has-text-right">
              <router-link class="button is-small" to="/mentors">
                ข้ามขั้นตอนนี้ ฉันขอดูเมนเทอร์ทุกคน
              </router-link>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import bg from "@/assets/bg.png";
import blank from "@/assets/blank.png";

export default {
  name: "GettingStarted",
  beforeCreate() {
    document.getElementsByTagName("html")[0].style.background = `url(${bg})`;
  },
  beforeDestroy() {
    document.getElementsByTagName("html")[0].style.background = `url(${blank})`;
  },
  data() {
    return {
      filter_step: 0,
      job_data: [
        "นักกฎหมาย",
        "ช่าง",
        "ตำรวจ",
        "ผู้บริหารโรงเรียน",
        "แพทย์",
        "นักการตลาด",
        "นักธุรกิจ",
        "นักลงทุน",
        "นักวิเคราะห์",
        "โปรแกรมเมอร์",
        "เจ้าหน้าที่การบิน",
        "นักกายภาพบำบัด",
        "นักบัญชี",
        "นักเศรษฐศาสตร์",
        "พยาบาล",
        "นักเขียน",
        "นักสังคมสงเคราะห์",
        "ศิลปิน",
        "สถาปนิก",
        "อาจารย์",
        "ที่ปรึกษาทางธุรกิจ",
        "นักวิทยาศาสตร์",
        "นักบริหาร",
        "นักวิจัยทางการตลาด",
        "ครีเอทีฟโฆษณา",
        "ผู้พัฒนาด้านอสังหาริมทรัพย์",
        "ผู้ให้คำปรึกษาด้านการเมือง",
        "นักการทูต",
        "นักการเมือง",
        "นักจิตวิทยา",
        "ที่ปรึกษาสถานฟื้นฟู",
        "ทหาร",
        "ผู้พิพากษา",
        "เกษตรกร",
        "ผู้รักษาความปลอดภัย",
        "วิศวกร",
        "เทคนิคการแพทย์",
        "นักประดิษฐ์",
        "ผู้นำทหาร",
        "นักวิเคราะห์ทางการเงิน",
        "นักวิชาการ",
        "งานให้คำปรึกษา",
        "นักบำบัด",
        "นักสังคมวิเคราะห์",
        "นักวิจัย",
        "ครู",
      ],
      filter: "",
    };
  },
  computed: {
    filtered_job() {
      if (this.filter === "") return this.job_data;
      return this.job_data.filter((j) => j.includes(this.filter));
    },
  },
  methods: {
    gotomentor() {
      this.$router.push("mentors");
    },
  },
};
</script>

<style lang="scss" scoped>
div.button-group > .button {
  flex: 1 1 0;
  height: unset;
  align-self: stretch;
  flex-direction: column;
  padding: 1.25rem;

  > h2 {
    margin: 1.25rem 0 0;
  }
}

.job_btns {
  max-height: 30vh;
  overflow: hidden scroll;
  border: #dbdbdb 1px solid;
}
</style>