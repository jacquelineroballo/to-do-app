var vm = new Vue({
    el: '#to-do-list',
    data: {
        newTask: '',
        tasks: [],
    },
    methods: {
        addTask: function () {
            if (this.newTask != '');
            this.tasks.push({ text: this.newTask, finish: false })
            this.newTask = '';
        },
        finishTask: function (task) {
            task.finish = !task.finish;
        }
    }
})