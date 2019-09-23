<template>
  <div>
    <div class="cropper">
      <vue-cropper
        ref="cropper"
        output-type="png"
        :src="imgSrc"
        alt="Source Image"
        :min-container-width="250"
        :min-container-height="180"
        :min-crop-box-height="100"
        :img-style="{ width: '100%', height: '400px' }"
        :cropmove="cropmove"
        :aspect-ratio="1"
        :highlite="false"
        :view-mode="1"
        :background="false"
      >
      </vue-cropper>

      <v-container class="button">
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn color="success" icon @click="reset">
              <v-icon>mdi-restart</v-icon></v-btn
            >
            <v-btn color="success" icon @click="rotate">
              <v-icon>mdi-crop-rotate</v-icon></v-btn
            >
            <v-btn fab color="success" @click="crop">
              <v-icon>mdi-crop-free</v-icon></v-btn
            >
            <v-btn color="success" icon @click="scaleX">
              <v-icon>mdi-axis-z-rotate-counterclockwise</v-icon></v-btn
            >
            <v-btn color="success" icon @click="scaleY">
              <v-icon>mdi-horizontal-rotate-clockwise</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container grid-list-xs>
      <v-list>
        <v-subheader>Pre</v-subheader>
        <v-subheader>Avatar</v-subheader>
        <v-avatar size="30px">
          <v-img :src="image" />
        </v-avatar>
        <v-avatar>
          <v-img :src="image" />
        </v-avatar>
        <v-avatar size="60px">
          <v-img :src="image" />
        </v-avatar>
        <v-subheader>Icon</v-subheader>
        <v-avatar tile size="30px">
          <v-img :src="image" />
        </v-avatar>
        <v-avatar tile>
          <v-img :src="image" />
        </v-avatar>
        <v-avatar tile size="60px">
          <v-img :src="image" />
        </v-avatar>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
  components: {
    VueCropper
  },

  props: {
    imgSrc: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      image: '',
      isScale: { x: false, y: false }
    }
  },

  methods: {
    rotate() {
      this.$refs.cropper.rotate(-45)
      this.image = this.getCrop()
    },

    getCrop() {
      return this.$refs.cropper.getCroppedCanvas().toDataURL()
    },

    crop() {
      const cropImage = this.getCrop()
      this.$emit('crop', cropImage)
    },

    cropmove() {
      this.image = this.getCrop()
    },

    scaleX() {
      if (this.isScale.x) {
        this.$refs.cropper.scaleX(1)
        this.isScale.x = false
      } else {
        this.$refs.cropper.scaleX(-1)
        this.isScale.x = true
      }
      this.image = this.getCrop()
    },

    scaleY() {
      if (this.isScale.y) {
        this.$refs.cropper.scaleY(1)
        this.isScale.y = false
      } else {
        this.$refs.cropper.scaleY(-1)
        this.isScale.y = true
      }
      this.image = this.getCrop()
    },

    reset() {
      this.isScale.x = false
      this.isScale.y = false
      this.$refs.cropper.reset()
      this.image = this.getCrop()
    }
  }
}
</script>

<style src="cropperjs/dist/cropper.css"></style>

<style>
.button {
  position: absolute;
  bottom: -20px;
}
.cropper {
  position: relative;
}
</style>
