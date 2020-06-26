class TasksController < ApplicationController

    def index
        tasks = Task.all 
        render json: tasks
    end

    def create
        Task.create(task_params)
        head 200
    end

private

    def task_params
        params.require(:task).permit(:title, :body, :task_date, :due_date, :contact_name, :contact_email, :contact_mobile, :image, :extra_info, :completed)
    end

end

