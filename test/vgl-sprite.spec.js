import VglSprite from "../src/vgl-sprite.js";
import VglMaterial from "../src/vgl-material.js";
import VglAssets from "../src/vgl-assets.js";
const assert = chai.assert;

describe("VglSpriteのテスト", function() {
    describe("プロパティの確認", function() {
        it("instプロパティはSpriteオブジェクト", function() {
            const vm = new Vue(VglSprite);
            assert.isTrue(vm.inst.isSprite);
        });
    });
    describe("プロパティのテスト", function() {
        describe("materialのテスト", function() {
            it("同じ階層のmaterial", function() {
                const vm = new Vue({
                    template: `<vgl-assets><vgl-material name="u!$ok" ref="g" /><vgl-material name="xo" /><vgl-sprite material="u!$ok" ref="m" /></vgl-assets>`,
                    components: {
                        VglSprite,
                        VglMaterial,
                        VglAssets
                    }
                }).$mount();
                assert.equal(vm.$refs.m.inst.material, vm.$refs.g.inst);
            });
            it("上層のmaterial", function() {
                const vm = new Vue({
                    template: `<vgl-assets><vgl-material name="u!$ok" ref="g" /><vgl-assets><vgl-sprite material="u!$ok" ref="m" /></vgl-assets></vgl-assets>`,
                    components: {
                        VglSprite,
                        VglMaterial,
                        VglAssets
                    }
                }).$mount();
                assert.equal(vm.$refs.m.inst.material, vm.$refs.g.inst);
            });
            it("スコープ外のmaterial", function() {
                const vm = new Vue({
                    template: `<vgl-assets><vgl-assets><vgl-material name="u'$ok" ref="g" /></vgl-assets><vgl-sprite material="u'$ok" ref="m" /></vgl-assets>`,
                    components: {
                        VglSprite,
                        VglMaterial,
                        VglAssets
                    }
                }).$mount();
                assert.notEqual(vm.$refs.m.inst.material, vm.$refs.g.inst);
            });
        });
    });
});