<template>
  <div>
    <Layout v-model="layoutInfos">
      <Header :UILayoutInfos="layoutInfos" height="80px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum autem aut alias. Ea in vitae, a, harum error reiciendis architecto, id corporis necessitatibus consequatur laboriosam illo. Omnis
        natus vero voluptatibus?
      </Header>

      <Drawer width="300px" side="left">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>{{ layoutInfos }}</li>
        </ul>
      </Drawer>

      <Page :UILayoutInfos="layoutInfos">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mauris eu mauris facilisis lobortis sed quis magna. Vivamus sed eros sed est ornare scelerisque nec eget lectus. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula velit et nisi gravida tempus. In hac habitasse platea dictumst. Vestibulum cursus lobortis
        gravida. Maecenas dictum id massa nec fringilla. Proin maximus, ex a laoreet vulputate, risus nulla mattis mi, nec vestibulum lectus diam gravida leo. Nullam pulvinar ac lacus ac tristique.
        Cras congue mauris elit, sit amet vestibulum orci mollis et. Maecenas pellentesque, odio a blandit ornare, diam diam semper arcu, vitae imperdiet libero orci quis velit. Quisque et semper
        eros, non vehicula justo. Maecenas arcu ipsum, vestibulum a erat vitae, gravida facilisis urna. Nam ante ex, pretium dignissim maximus eget, ullamcorper vel justo. Pellentesque ullamcorper
        volutpat ex eu blandit. Cras non nisi augue. Sed sollicitudin erat at turpis porttitor aliquam. Vivamus nulla dolor, molestie consectetur ante at, faucibus cursus massa. Etiam molestie ligula
        quis sapien imperdiet tempor. Nulla facilisi. Etiam vitae maximus dolor. Nunc bibendum, mi id ullamcorper dictum, nisi leo tincidunt urna, eget dictum nulla arcu nec magna. Proin gravida
        turpis id egestas cursus. Aliquam ac volutpat velit, ut dictum risus. Suspendisse pharetra nunc vel velit sodales, in commodo metus congue. Etiam facilisis rutrum leo eget porttitor. Fusce
        elementum ut justo et ultricies. Quisque commodo lectus in consectetur rhoncus. Sed auctor ligula eget mi feugiat congue faucibus ut nibh. Nulla quam erat, blandit sit amet diam nec, aliquet
        mollis felis. Praesent vel mi diam. Curabitur varius dapibus cursus. Mauris pharetra pulvinar metus quis iaculis. Aenean ac neque rutrum, efficitur purus ut, ullamcorper diam. Aenean rutrum
        faucibus dolor ac ornare. Aliquam efficitur arcu id dolor mattis, ac vehicula augue vulputate. Morbi pretium porta orci, tristique ullamcorper arcu. Proin nec mollis velit. Phasellus sodales
        feugiat libero fermentum mollis. Vestibulum imperdiet hendrerit dictum. Maecenas a pulvinar arcu. Integer nec dui rhoncus leo consectetur congue. Donec maximus ac ligula at accumsan. Nulla
        congue pellentesque lobortis. Nullam vulputate, tellus vitae pharetra pellentesque, metus massa dictum lacus, sit amet molestie nisl leo vitae velit. Cras sodales ultrices purus, non convallis
        velit mollis nec. Curabitur turpis justo, tincidunt nec mi sed, bibendum cursus sapien. Integer fermentum quam sit amet metus lacinia ornare. Integer hendrerit, leo nec bibendum hendrerit,
        libero est tempus risus, ut fringilla ligula massa feugiat ante. Vivamus egestas, augue et scelerisque vulputate, lectus ipsum vulputate nisl, vel auctor dui lacus at metus. Donec feugiat leo
        in molestie ultrices. Integer eu mauris eu metus pretium vulputate vel vitae est. Nullam et tortor at quam ullamcorper interdum vitae sed ipsum. Suspendisse nulla turpis, tempor non aliquam
        vel, aliquet vitae turpis. Praesent congue faucibus varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mauris eu mauris facilisis lobortis sed quis magna. Vivamus sed
        eros sed est ornare scelerisque nec eget lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vehicula velit et nisi gravida tempus. In hac
        habitasse platea dictumst. Vestibulum cursus lobortis gravida. Maecenas dictum id massa nec fringilla. Proin maximus, ex a laoreet vulputate, risus nulla mattis mi, nec vestibulum lectus diam
        gravida leo. Nullam pulvinar ac lacus ac tristique. Cras congue mauris elit, sit amet vestibulum orci mollis et. Maecenas pellentesque, odio a blandit ornare, diam diam semper arcu, vitae
        imperdiet libero orci quis velit. Quisque et semper eros, non vehicula justo. Maecenas arcu ipsum, vestibulum a erat vitae, gravida facilisis urna. Nam ante ex, pretium dignissim maximus eget,
        ullamcorper vel justo. Pellentesque ullamcorper volutpat ex eu blandit. Cras non nisi augue. Sed sollicitudin erat at turpis porttitor aliquam. Vivamus nulla dolor, molestie consectetur ante
        at, faucibus cursus massa. Etiam molestie ligula quis sapien imperdiet tempor. Nulla facilisi. Etiam vitae maximus dolor. Nunc bibendum, mi id ullamcorper dictum, nisi leo tincidunt urna, eget
        dictum nulla arcu nec magna. Proin gravida turpis id egestas cursus. Aliquam ac volutpat velit, ut dictum risus. Suspendisse pharetra nunc vel velit sodales, in commodo metus congue. Etiam
        facilisis rutrum leo eget porttitor. Fusce elementum ut justo et ultricies. Quisque commodo lectus in consectetur rhoncus. Sed auctor ligula eget mi feugiat congue faucibus ut nibh. Nulla quam
        erat, blandit sit amet diam nec, aliquet mollis felis. Praesent vel mi diam. Curabitur varius dapibus cursus. Mauris pharetra pulvinar metus quis iaculis. Aenean ac neque rutrum, efficitur
        purus ut, ullamcorper diam. Aenean rutrum faucibus dolor ac ornare. Aliquam efficitur arcu id dolor mattis, ac vehicula augue vulputate. Morbi pretium porta orci, tristique ullamcorper arcu.
        Proin nec mollis velit. Phasellus sodales feugiat libero fermentum mollis. Vestibulum imperdiet hendrerit dictum. Maecenas a pulvinar arcu. Integer nec dui rhoncus leo consectetur congue.
        Donec maximus ac ligula at accumsan. Nulla congue pellentesque lobortis. Nullam vulputate, tellus vitae pharetra pellentesque, metus massa dictum lacus, sit amet molestie nisl leo vitae velit.
        Cras sodales ultrices purus, non convallis velit mollis nec. Curabitur turpis justo, tincidunt nec mi sed, bibendum cursus sapien. Integer fermentum quam sit amet metus lacinia ornare. Integer
        hendrerit, leo nec bibendum hendrerit, libero est tempus risus, ut fringilla ligula massa feugiat ante. Vivamus egestas, augue et scelerisque vulputate, lectus ipsum vulputate nisl, vel auctor
        dui lacus at metus. Donec feugiat leo in molestie ultrices. Integer eu mauris eu metus pretium vulputate vel vitae est. Nullam et tortor at quam ullamcorper interdum vitae sed ipsum.
        Suspendisse nulla turpis, tempor non aliquam vel, aliquet vitae turpis. Praesent congue faucibus varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet mauris eu mauris
        facilisis lobortis sed quis magna. Vivamus sed eros sed est ornare scelerisque nec eget lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
        vehicula velit et nisi gravida tempus. In hac habitasse platea dictumst. Vestibulum cursus lobortis gravida. Maecenas dictum id massa nec fringilla. Proin maximus, ex a laoreet vulputate,
        risus nulla mattis mi, nec vestibulum lectus diam gravida leo. Nullam pulvinar ac lacus ac tristique. Cras congue mauris elit, sit amet vestibulum orci mollis et. Maecenas pellentesque, odio a
        blandit ornare, diam diam semper arcu, vitae imperdiet libero orci quis velit. Quisque et semper eros, non vehicula justo. Maecenas arcu ipsum, vestibulum a erat vitae, gravida facilisis urna.
        Nam ante ex, pretium dignissim maximus eget, ullamcorper vel justo. Pellentesque ullamcorper volutpat ex eu blandit. Cras non nisi augue. Sed sollicitudin erat at turpis porttitor aliquam.
        Vivamus nulla dolor, molestie consectetur ante at, faucibus cursus massa. Etiam molestie ligula quis sapien imperdiet tempor. Nulla facilisi. Etiam vitae maximus dolor. Nunc bibendum, mi id
        ullamcorper dictum, nisi leo tincidunt urna, eget dictum nulla arcu nec magna. Proin gravida turpis id egestas cursus. Aliquam ac volutpat velit, ut dictum risus. Suspendisse pharetra nunc vel
        velit sodales, in commodo metus congue. Etiam facilisis rutrum leo eget porttitor. Fusce elementum ut justo et ultricies. Quisque commodo lectus in consectetur rhoncus. Sed auctor ligula eget
        mi feugiat congue faucibus ut nibh. Nulla quam erat, blandit sit amet diam nec, aliquet mollis felis. Praesent vel mi diam. Curabitur varius dapibus cursus. Mauris pharetra pulvinar metus quis
        iaculis. Aenean ac neque rutrum, efficitur purus ut, ullamcorper diam. Aenean rutrum faucibus dolor ac ornare. Aliquam efficitur arcu id dolor mattis, ac vehicula augue vulputate. Morbi
        pretium porta orci, tristique ullamcorper arcu. Proin nec mollis velit. Phasellus sodales feugiat libero fermentum mollis. Vestibulum imperdiet hendrerit dictum. Maecenas a pulvinar arcu.
        Integer nec dui rhoncus leo consectetur congue. Donec maximus ac ligula at accumsan. Nulla congue pellentesque lobortis. Nullam vulputate, tellus vitae pharetra pellentesque, metus massa
        dictum lacus, sit amet molestie nisl leo vitae velit. Cras sodales ultrices purus, non convallis velit mollis nec. Curabitur turpis justo, tincidunt nec mi sed, bibendum cursus sapien. Integer
        fermentum quam sit amet metus lacinia ornare. Integer hendrerit, leo nec bibendum hendrerit, libero est tempus risus, ut fringilla ligula massa feugiat ante. Vivamus egestas, augue et
        scelerisque vulputate, lectus ipsum vulputate nisl, vel auctor dui lacus at metus. Donec feugiat leo in molestie ultrices. Integer eu mauris eu metus pretium vulputate vel vitae est. Nullam et
        tortor at quam ullamcorper interdum vitae sed ipsum. Suspendisse nulla turpis, tempor non aliquam vel, aliquet vitae turpis. Praesent congue faucibus varius.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. In sit amet mauris eu mauris facilisis lobortis sed quis magna. Vivamus sed eros sed est ornare scelerisque nec eget lectus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Sed vehicula velit et nisi gravida tempus. In hac habitasse platea dictumst. Vestibulum cursus lobortis gravida. Maecenas dictum id massa
        nec fringilla. Proin maximus, ex a laoreet vulputate, risus nulla mattis mi, nec vestibulum lectus diam gravida leo. Nullam pulvinar ac lacus ac tristique. Cras congue mauris elit, sit amet
        vestibulum orci mollis et. Maecenas pellentesque, odio a blandit ornare, diam diam semper arcu, vitae imperdiet libero orci quis velit. Quisque et semper eros, non vehicula justo. Maecenas
        arcu ipsum, vestibulum a erat vitae, gravida facilisis urna. Nam ante ex, pretium dignissim maximus eget, ullamcorper vel justo. Pellentesque ullamcorper volutpat ex eu blandit. Cras non nisi
        augue. Sed sollicitudin erat at turpis porttitor aliquam. Vivamus nulla dolor, molestie consectetur ante at, faucibus cursus massa. Etiam molestie ligula quis sapien imperdiet tempor. Nulla
        facilisi. Etiam vitae maximus dolor. Nunc bibendum, mi id ullamcorper dictum, nisi leo tincidunt urna, eget dictum nulla arcu nec magna. Proin gravida turpis id egestas cursus. Aliquam ac
        volutpat velit, ut dictum risus. Suspendisse pharetra nunc vel velit sodales, in commodo metus congue. Etiam facilisis rutrum leo eget porttitor. Fusce elementum ut justo et ultricies. Quisque
        commodo lectus in consectetur rhoncus. Sed auctor ligula eget mi feugiat congue faucibus ut nibh. Nulla quam erat, blandit sit amet diam nec, aliquet mollis felis. Praesent vel mi diam.
        Curabitur varius dapibus cursus. Mauris pharetra pulvinar metus quis iaculis. Aenean ac neque rutrum, efficitur purus ut, ullamcorper diam. Aenean rutrum faucibus dolor ac ornare. Aliquam
        efficitur arcu id dolor mattis, ac vehicula augue vulputate. Morbi pretium porta orci, tristique ullamcorper arcu. Proin nec mollis velit. Phasellus sodales feugiat libero fermentum mollis.
        Vestibulum imperdiet hendrerit dictum. Maecenas a pulvinar arcu. Integer nec dui rhoncus leo consectetur congue. Donec maximus ac ligula at accumsan. Nulla congue pellentesque lobortis. Nullam
        vulputate, tellus vitae pharetra pellentesque, metus massa dictum lacus, sit amet molestie nisl leo vitae velit. Cras sodales ultrices purus, non convallis velit mollis nec. Curabitur turpis
        justo, tincidunt nec mi sed, bibendum cursus sapien. Integer fermentum quam sit amet metus lacinia ornare. Integer hendrerit, leo nec bibendum hendrerit, libero est tempus risus, ut fringilla
        ligula massa feugiat ante. Vivamus egestas, augue et scelerisque vulputate, lectus ipsum vulputate nisl, vel auctor dui lacus at metus. Donec feugiat leo in molestie ultrices. Integer eu
        mauris eu metus pretium vulputate vel vitae est. Nullam et tortor at quam ullamcorper interdum vitae sed ipsum. Suspendisse nulla turpis, tempor non aliquam vel, aliquet vitae turpis. Praesent
        congue faucibus varius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis eligendi modi voluptatibus et impedit sit nesciunt, veniam dignissimos illum qui
        exercitationem ullam dolorum itaque. Amet enim eum tenetur molestiae!
      </Page>

      <Footer :UILayoutInfos="layoutInfos" height="80px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae dolor perferendis eligendi expedita nihil! Tempore aliquam ut adipisci impedit porro dolor. Autem animi eius, architecto
        eligendi magni dicta ipsa.
      </Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Drawer from '@/components/drawer/Drawer.vue'
import Footer from '@/components/footer/Footer.vue'
import Header from '@/components/header/Header.vue'
import Layout from '@/components/layout/Layout.vue'
import Page from '@/components/page/Page.vue'

export default defineComponent({
  components: {
    Drawer,
    Footer,
    Header,
    Layout,
    Page,
  },
  setup() {
    const layoutInfos = ref()

    return { layoutInfos }
  },
})
</script>

<style>
@import url('@/styles/colors.css');
@import url('@/styles/typography.css');
@import url('@/styles/global.css');
</style>
