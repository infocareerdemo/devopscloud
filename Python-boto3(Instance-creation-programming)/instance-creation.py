import boto3

def create_ec2_instance():
    try:
        print("Creating EC2 instance")
        ec2 = boto3.client("ec2")
        
        # Launch the instance with specified network settings
        response = ec2.run_instances(
            ImageId="ami-0ad21ae1d0696ad58",  # Ubuntu AMI ID, adjust as needed
            MinCount=1,
            MaxCount=1,
            InstanceType="t2.medium",
            NetworkInterfaces=[
                {
                    'SubnetId': 'subnet-03636dd3198024e1b',  # Replace with your subnet ID (Info-subnet1)
                    'AssociatePublicIpAddress': True,  # Enable auto-assign public IP
                    'Groups': ['sg-0f22f85a733041d4d'],  # Security group ID (launch-wizard-2)
                    'DeviceIndex': 0  # Device index for the network interface
                }
            ],
            KeyName="Aws-master"  
        )
        
        instance_id = response['Instances'][0]['InstanceId']
        print(f"EC2 instance created successfully with ID: {instance_id}")
        
        # Tag the instance with a name
        ec2.create_tags(
            Resources=[instance_id],
            Tags=[
                {'Key': 'Name', 'Value': 'test-boto3'} #name of your instance
            ]
        )
        print("Instance tagged with name 'test-boto3'") #name of your instance
        
        return instance_id  # Return instance ID for possible future operations
        
    except Exception as e:
        print(f"Error creating EC2 instance: {e}")

def stop_ec2_instance(instance_id):
    try:
        ec2 = boto3.client("ec2")
        
        # Stop the instance
        print("Stopping EC2 instance")
        ec2.stop_instances(InstanceIds=[instance_id])
        ec2.get_waiter('instance_stopped').wait(InstanceIds=[instance_id])
        print("EC2 instance stopped successfully")
        
    except Exception as e:
        print(f"Error stopping EC2 instance: {e}")

def start_ec2_instance(instance_id):
    try:
        ec2 = boto3.client("ec2")
        
        # Start the instance
        print("Starting EC2 instance")
        ec2.start_instances(InstanceIds=[instance_id])
        ec2.get_waiter('instance_running').wait(InstanceIds=[instance_id])
        print("EC2 instance started successfully")
        
    except Exception as e:
        print(f"Error starting EC2 instance: {e}")

def update_instance_type(instance_id, new_instance_type):
    try:
        ec2 = boto3.client("ec2")
        
        # Stop the instance if it's running
        stop_ec2_instance(instance_id)
        
        # Modify the instance type
        print(f"Updating instance type to {new_instance_type}")
        ec2.modify_instance_attribute(
            InstanceId=instance_id,
            InstanceType={'Value': new_instance_type}
        )
        print("Instance type updated successfully")
        
        # Start the instance
        start_ec2_instance(instance_id)
        
    except Exception as e:
        print(f"Error updating EC2 instance type: {e}")

def delete_ec2_instance(instance_id):
    try:
        ec2 = boto3.client("ec2")
        
        # Terminate the instance
        print("Terminating EC2 instance")
        ec2.terminate_instances(InstanceIds=[instance_id])
        ec2.get_waiter('instance_terminated').wait(InstanceIds=[instance_id])
        print("EC2 instance terminated successfully")
        
    except Exception as e:
        print(f"Error terminating EC2 instance: {e}")

if __name__ == "__main__":
    instance_id = create_ec2_instance()
    # Additional operations on the instance can be performed here using the instance_id
