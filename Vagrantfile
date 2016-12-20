Vagrant.configure("2") do |config|
    config.ssh.forward_agent = true
    config.ssh.insert_key = false

    # Ubuntu 14.04 - Trusty Tahr
    config.vm.define "ubuntu14" do |ubuntu14|
        ubuntu14.vm.box = "geerlingguy/ubuntu1404"
        ubuntu14.vm.hostname = "ko-webmail"
        ubuntu14.vm.network "private_network", ip: "192.168.27.14"
        ubuntu14.vm.provision "ansible" do |ansible|
            ansible.playbook = "playbook.yml"
        end
    end
end