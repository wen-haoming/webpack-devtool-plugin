import { defineComponent, ref } from "vue";
import { Button, Modal, AutoComplete,message } from "ant-design-vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import Cookie from 'js-cookie'

export default defineComponent({
  setup() {
    const visible = ref(false);
    const domain = ref(Cookie.get('_domain'))

    const options = ref(window._domains || [
        // { value: "Burns Bay Road", },
        // { value: "Downing Street" },
        // { value: "Wall Street" },
      ])

      const onChange = (val)=>{
        domain.value = val
      }

    const onOk = ()=>{
        visible.value = false
        Cookie.set('_domain',domain.value)
        message.success('设置成功')
    }

    return () => {
      return (
        <>
          <Button
            type="primary"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              left: "0px",
              bottom: "100px",
            }}
            onClick={() => (visible.value = true)}
          >
            <SettingOutlined style={{ fontSize: "30px" }} />
          </Button>
          <Modal
            cancelText="close"
            okText="confirm"
            visible={visible.value}
            onCancel={() => {
              visible.value = false;
            }}
            onOk={onOk}
          >
            <AutoComplete
              value={domain.value}
              options={options.value}
              style="width: 200px"
              placeholder="input or select"
              onChange={onChange}
            ></AutoComplete>
            {/* <Select style={{ width: "200px" }}>
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select> */}
          </Modal>
        </>
      );
    };
  },
});
