  
  const Member = (props)=> {  
      const [user, setUser] = useState({});
      const [profile, setProfile] = useState({});
    
   // run effect when user state updates
    useEffect(() => {
      const doEffects = async () => {
        try {

          const pro = socialNetworkContract.members[0]
          console.log(pro)
          const p = await incidentsInstance.usersProfile(pro, { from: accounts[0] });
          const a = await snInstance.getUsersPosts(pro, { from: accounts[0] });
          console.log(a)
      console.log(p)
      setProfile(p)

        } catch (e) {
      console.error(e)
    }
  }
    doEffects();
  }, [profile, state]);

  const socialNetworkContract = useSelector((state) => state.socialNetworkContract)

  return (
    <div class="container">

                <a target="_blank">Name : {profile.name}</a>

        {socialNetworkContract.posts.map((p, index) => {
          return <tr key={index}>
{p.message}
        </tr>})}
      </div>
  )
}

export default Member;
