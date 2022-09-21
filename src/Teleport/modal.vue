<template>
    <teleport to="body">
        <div>
            <a-button type="primary" @click="showModal">Open Modal with async logic</a-button>
            <a-modal v-model:visible="visible" title="Title" :confirm-loading="confirmLoading" @ok="handleOk">
                <p>{{ modalText }}</p>
            </a-modal>
        </div>
    </teleport>
</template>
<script>
export default {
    data() {
        return {
            modalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.modalText = 'The modal will be closed after two seconds';
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000)
        }
    }
};
</script>