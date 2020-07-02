class TasksController < ApplicationController
before_action :find_task, only: [:show, :update, :destroy]
  
    def index 
    tasks = Task.all
    render json: tasks
    end 
  
    def show 
      render json: @task
    end 
  
    def create 
      Task.create(task_params)
      render json: "A new task has been created", status: 200 
    end 
  
    def update 
      @task.update(task_params)
      render json: "task has been updated", status: 200
    end 

    def destroy
      @task.destroy
      render json: "Task has been completed", status: 200
    end 
  
    private 
  
    def task_params 
      params.require(:task).permit(:title, :body, :task_date, :due_date, :contact_name, :contact_email, :contact_mobile, :image, :extra_info, :completed)
    end 
  
    def find_task 
      @task = Task.find(params[:id])
    end 
  end