<template>
  <div class="container content">
    <div class="mt-2"></div>
    <h1>มารู้จักเมนเทอร์ของเรากัน</h1>
    <hr />
    <div class="columns is-multiline">
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor00.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Marian Gomez</h2>
          <div class="h3 subtitle mb-0">Software Developer</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor01.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Leonard Kim</h2>
          <div class="h3 subtitle mb-0">Archeologist</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor02.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Ophelia Franklin</h2>
          <div class="h3 subtitle mb-0">Head of Marketing</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor00.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Marian Gomez</h2>
          <div class="h3 subtitle mb-0">Software Developer</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor01.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Leonard Kim</h2>
          <div class="h3 subtitle mb-0">Archeologist</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor02.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Ophelia Franklin</h2>
          <div class="h3 subtitle mb-0">Head of Marketing</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor01.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Leonard Kim</h2>
          <div class="h3 subtitle mb-0">Archeologist</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
      <div class="column is-3">
        <div class="box has-text-centered">
          <figure class="image is-128x128" style="margin: auto">
            <img class="is-rounded" src="@/assets/mentor02.jpg" />
          </figure>
          <h2 class="mt-3 mb-0">Ophelia Franklin</h2>
          <div class="h3 subtitle mb-0">Head of Marketing</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <b-button
            expanded
            outlined
            type="is-primary"
            @click="is_schedule_modal_active = true"
            >ดูเวลาที่สะดวก</b-button
          >
        </div>
      </div>
    </div>

    <b-modal v-model="is_schedule_modal_active" :width="640" scroll="keep">
      <div class="box">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128" style="margin: auto">
              <img class="is-rounded" src="@/assets/mentor00.jpg" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h3 class="mt-3 mb-0">Marian Gomez</h3>
              <div class="h3 subtitle mb-0">Software Developer</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
        </article>
        <hr />
        <div class="columns" style="align-items: flex-end">
          <div class="column">
            <b-field label="เลือกวันที่" grouped>
              <b-datepicker
                v-model="selected"
                :mobile-native="false"
                position="is-top-right"
              >
                <template v-slot:trigger>
                  <b-button icon-left="calendar-day" type="is-primary" />
                </template>
              </b-datepicker>
              <b-input expanded readonly :value="selectedString" />
            </b-field>
          </div>
          <div class="column">
            <b-button
              expanded
              outlined
              type="is-primary"
              :disabled="!selectedString"
              @click="alert"
              >จองเวลาปรึกษา 📋</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Mentors",
  data() {
    return {
      is_schedule_modal_active: false,
      selected: null,
    };
  },
  computed: {
    selectedString() {
      return this.selected ? this.selected.toDateString() : "";
    },
  },
  methods: {
    alert() {
      this.$buefy.dialog.alert(
        "เราได้บันทึกเวลาของคุณไว้แล้ว หากมีการเปลี่ยนแปลงใดๆ เราจะรีบตอบกลับทันที"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.columns.is-multiline > .column.is-3 {
  align-self: stretch;
  > .box {
    height: 100%;
  }
}
</style>