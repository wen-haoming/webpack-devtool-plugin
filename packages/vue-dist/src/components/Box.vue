<script>
import { defineComponent, ref, watchEffect } from "vue";
import { Button, Drawer, AutoComplete, message } from "ant-design-vue";
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
          <Drawer
            width={300}
            title="devtool"
            visible={visible.value}
            onClose={methods.onCancel}
            footer={Footer}
            placement="left"
            style={{paddingBottom:'20px'}}
          >
            <AutoComplete
              value={domain.value}
              options={options.value}
              style="width: 200px"
              placeholder="input or select"
              onChange={methods.onChange}
            ></AutoComplete>
            <div
             style={
                {position:'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
                zIndex: 1,}
                 }
          >
            <Button  onClick={methods.onCancel}>close</Button>
              <Button
                style={{marginLeft:'30px'}}
                type="primary"
                disabled={!(domain.value || "").length}
                onClick={methods.onOk}
              >confirm</Button>
            </div>
          </Drawer>
        </>
      );
    };
  },
});
</script>
