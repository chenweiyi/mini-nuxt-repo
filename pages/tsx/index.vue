<script lang="tsx">

export default defineComponent({
  name: 'TsxIndex',
  setup() {
    const goHome = () => {
      navigateTo('/')
    }
    return () => (
      <div>
        <div>this is tsx</div>
        <ElButton onClick={goHome}>home</ElButton>
      </div>
    )
  }

})
</script>

<style scoped lang="less"></style>
