<template>
  <div>
    <template v-for="(i, index) in a">
      <p v-show="c.includes(index)" :key="i.text" class="text-center">
        {{ i.text }}
      </p>
      <p :key="i.id + 'q'">sfniofsiofj</p>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    a: [
      { id: 1, text: 'q' },
      { id: 1, text: 'qsfa' },
      { id: 2, text: 'qasfsa' },
      { id: 2, text: 'qasfsa' }
    ],
    b: [],
    c: []
  }),
  created() {
    this.a.forEach((res, index) => {
      // console.log(res, index)
      if (!this.b.includes(res.id)) {
        this.b.push(res.id)
        this.c.push(index)
        // console.log('pushed')
      }
    })
    console.log(this.b)
    console.log(this.c)
  },
  methods: {
    is(val) {
      console.log(1)
      if (!this.b.includes(val.id) || val.text === 'q') {
        this.b.push(val.id)
        return true
      }
    }
  }
}
</script>

<style></style>
