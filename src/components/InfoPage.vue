<template>
    <DetailPageInfoContent :details="detailsData" :sizes="columnSizes" :prop="propertyMap">
      <template #append>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6" class="info-item-content">
          <button>Click me append</button>
        </el-col>
      </template>
      <template #prepend>
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="6" class="info-item-content">
          <button>Click me prepend</button>
        </el-col>
      </template>
    </DetailPageInfoContent>
</template>

<script>
import DetailPageInfoContent from './DetailPageInfoContent.vue'; 

export default {
    data() {
      return {
        propertyMap: {
            productId: "产品ID",
            pluginId: "接入方式ID",
            connectMethod: "连接方式",
            cdkey: "产品密钥",
            description: "产品描述",
            nodeType: "节点类型",
            internetMethod: "联网方式",
            productType: "产品类别",
            createDate: {
              label: "创建时间",
              hidden: false,
              render: (h) => h("button", { props: { type: "text", onClick: () => console.log("Hello world") } }, "打印输出"),
              format: function(propKey, details){
                if(propKey === "createDate"){
                  const year = details.getFullYear();
                  const month = (details.getMonth() + 1).toString().padStart(2, '0');
                  const day = details.getDate().toString().padStart(2, '0');
                  return `${year}-${month}-${day}`;
                }
              }
            }

        },
        columnSizes: {
          xs: 12,
          sm: 12,
          md: 8,
          lg: 6,
          xl: 4
        },
        detailsData: {
            productId: "1637457575",
            pluginId: "874745753",
            connectMethod: "-",
            cdkey: "产品密钥",
            description: "35gfgy56hh56h5y4524",
            nodeType: "4",
            internetMethod: "1",
            productType: "1536",
            createDate: new Date(),
        }
      };
    },
    components: {
        DetailPageInfoContent
    },
    methods: {
        callPrependMethod() {
            console.log('Prepend button clicked for item:');
        },
    },
};
</script>