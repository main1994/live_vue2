export default {
  name: 'HeaderTitle',
  props: ['name'],
  methods: {
    backShow() {
      this.$router.back();
    }
  },
}