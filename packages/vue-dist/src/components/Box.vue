<script>
import { defineComponent, ref, watchEffect } from "vue";
import { Button, Modal, AutoComplete, message } from "ant-design-vue";
import { SettingOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  setup() {
    const visible = ref(false);

    const domain = ref(null);

    const options = ref(
      window._domains ||
        [
          // { value: "Burns Bay Road", },
          // { value: "Downing Street" },
          // { value: "Wall Street" },
        ]
    );

    watchEffect(() => {
      if (visible.value) {
        fetch("/getCurrentUrl").then(res=>res.json()).then((res) => {
          domain.value = res.currentUrl;
        });
      }
    });

    const methods = {
      onChange: (val) => {
        domain.value = val;
      },
      onOk: () => {
        visible.value = false;
        fetch(`/changeCurrentUrl?currentUrl=${domain.value}`).then(()=>{
             message.success("success");
        });
      },
      onCancel: () => {
        visible.value = false;
      },
    };

    return () => {
      const Footer = (
        <>
          <Button onClick={methods.onCancel}>close</Button>
          <Button
            type="primary"
            disabled={!(domain.value || "").length}
            onClick={methods.onOk}
          >
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
            onCancel={methods.onCancel}
            footer={Footer}
          >
            <AutoComplete
              value={domain.value}
              options={options.value}
              style="width: 200px"
              placeholder="input or select"
              onChange={methods.onChange}
            ></AutoComplete>
          </Modal>
        </>
      );
    };
  },
});
</script>
