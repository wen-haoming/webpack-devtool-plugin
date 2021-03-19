<script>
import { defineComponent, ref } from "vue";
import { Button, Modal, AutoComplete, message } from "ant-design-vue";
import { SettingOutlined } from "@ant-design/icons-vue";
import Cookie from "js-cookie";

// 初始化设置本地cookie

export default defineComponent({
  setup() {
    const visible = ref(false);

    const domain = ref(Cookie.get("_domain"));

    const options = ref(
      window._domains ||
        [
          // { value: "Burns Bay Road", },
          // { value: "Downing Street" },
          // { value: "Wall Street" },
        ]
    );

    const onChange = (val) => {
      domain.value = val;
    };

    const onOk = () => {
      visible.value = false;
      Cookie.set("_domain", domain.value);
      message.success("设置成功");
    };

    const onCancel = () => {
      visible.value = false;
    };

    return () => {

      const Footer = (
        <>
          <Button onClick={onCancel}>close</Button>
          <Button type="primary" disabled={!domain.value.length} onClick={onOk}>
            confirm
          </Button>
        </>
      );

      return (
        <>
          <Button
            class="btn"
            type="primary"
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              left: "0px",
              bottom: "5px",
              opacity: "0.7",
              padding: "0px",
              zIndex: 100000,
            }}
            onClick={() => (visible.value = true)}
          >
            <SettingOutlined style={{ fontSize: "30px" }} />
          </Button>
          <Modal
            cancelText="close"
            okText="confirm"
            visible={visible.value}
            onCancel={onCancel}
            footer={Footer}
          >
            <AutoComplete
              value={domain.value}
              options={options.value}
              style="width: 200px"
              placeholder="input or select"
              onChange={onChange}
            ></AutoComplete>
          </Modal>
        </>
      );
    };
  },
});
</script>
