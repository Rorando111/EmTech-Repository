import psutil
import time
import pickle

# Function to monitor CPU and memory usage
def monitor_resources(model_filename, output_filename):
    # Get initial CPU and memory usage
    initial_cpu = psutil.cpu_percent()
    initial_memory = psutil.virtual_memory().percent

    # Load the model from the pickle file
    start_time = time.time()
    with open(model_filename, 'rb') as model_file:
        svm_model, pca = pickle.load(model_file)
    end_time = time.time()

    # After loading, get final CPU and memory usage
    final_cpu = psutil.cpu_percent()
    final_memory = psutil.virtual_memory().percent

    # Calculate loading time
    loading_time = end_time - start_time

    # Prepare the output string
    output = (
        f"Initial CPU Usage: {initial_cpu}%\n"
        f"Final CPU Usage: {final_cpu}%\n"
        f"Initial Memory Usage: {initial_memory}%\n"
        f"Final Memory Usage: {final_memory}%\n"
        f"Model loading time: {loading_time:.2f} seconds\n"
    )

    # Print the output to the console
    print(output)

    # Save the output to a text file
    with open(output_filename, 'a') as output_file:  # Append mode
        output_file.write(output)

# Specify the path to your model file and output file
model_filename = 'C:/Users/Rolando/Desktop/Codes/Eval/Models/lof_1.pkl'  # Replace with your actual path
output_filename = 'C:/Users/Rolando/Desktop/Codes/Eval/model_evaluation.txt'  # Replace with your desired output path

# Call the monitoring function
monitor_resources(model_filename, output_filename)